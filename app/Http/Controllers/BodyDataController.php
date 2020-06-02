<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BodyData;
use App\User;
use Auth;
use Goat1000\SVGGraph\SVGGraph;

class BodyDataController extends Controller
{

    private function groupDataByOption($orderedRows)
    {
        $dict = [];
        foreach ($orderedRows as $row) {
            if (!array_key_exists($row['option'], $dict)) {
                $dict[$row['option']] = [
                    'option' => $row['option'],
                    'unit' => $row['unit'],
                    'data' => []
                ];
            }
            array_push($dict[$row['option']]['data'], [
                'id' => $row['id'],
                'date' => $row['date'],
                'value' => $row['value']
            ]);
        }
        return array_values($dict);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $userId)
    {

        if (!$request->has('chart')) {
            $ret = BodyData::where('user_id', $userId)->orderBy('date', 'ASC')->get();

            // group
            if ($request->has('group')) {
                $ret = $this->groupDataByOption($ret);
            }

            return response()->json($ret, 200);
        }

        $rows = BodyData::select('option', 'unit')
            ->where('user_id', $userId)
            ->distinct('option')
            ->get();

        $ret = [];

        $host = request()->getSchemeAndHttpHost();
        foreach ($rows as $row) {
            $data =  BodyData::where('user_id', $userId)
                ->where('option', $row['option'])
                ->orderBy('date', 'DESC')
                ->get();
            $ret[] = [
                'url' => count($data) > 1 ? $host . "/api/user/$userId/bodydata/chart?option=" . $row['option'] : '',
                'unit' => $row['unit'],
                'option' => $row['option'],
                'data' => $data
            ];
        }

        return response()->json($ret);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $userId)
    {
        //Batch create
        $by = Auth::User()->id;
        $user = User::find($userId);
        $ret = [];
        foreach ($request->input('batch') as $item) {
            if ($item['value'] > 0) {
                $bd = new BodyData();
                $bd->created_by = $by;
                $bd->value = $item['value'];
                $bd->option = $item['option'];
                $bd->unit = $item['unit'];
                $bd->date = $item['date'];
                $bd->user()->associate($user);
                $bd->save();
                $ret[] = $bd;
            }
        }
        User::getLatestMeasureDate($userId);
        return response()->json($ret, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $userId, $id)
    {
        $row = BodyData::where([
            'user_id' => $userId,
            'id' => $id
        ])->first();
        if (empty($row)) {
            return response()->json(array('message' => 'cannot find the body data'), 404);
        }

        if ($request->has('date')) {
            $row->date = $request->input('date');
        }
        if ($request->has('value')) {
            $row->value = (float) $request->input('value');
        }

        $row->created_by = Auth::User()->id;
        $row->save();
        return $row;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $userId, $id)
    {
        $row = BodyData::where([
            'user_id' => $userId,
            'id' => $id,
        ])->first();
        if (empty($row)) {
            return response()->json(array('message' => 'cannot find the body data'), 404);
        }
        $row->delete();
        return $row;
    }

    private function getGrap($min, $max)
    {
        $sacledMin = $min;
        $scaledMax = $max + ($max - $min) * 0.1;

        // dd($sacledMin, $scaledMax);
        $settings = array(
            'back_colour'       => 'transparent',
            'stroke_colour'     => 'rgba(255,255,255)',
            'line_stroke_width' => 6,
            'back_stroke_width' => 0,
            'back_stroke_colour' => '#4fd2c2',
            'show_axis_h'       => false,
            'show_grid'         => false,
            'axis_colour'       => '#fff',
            'axis_overlap'      => 2,
            'axis_text_space_v'   => 18,
            'axis_text_space_h'   => 26,
            'show_axis_v'       => false,
            'axis_font'         => 'Arial',
            'axis_font_size'    => 18,
            'grid_colour'       => '#4fd2c2 ',
            'label_colour'      => '#fff',
            'pad_right'         => 20,
            'pad_left'          => 0,
            'link_base'         => '/',
            'link_target'       => '_top',
            'fill_under'        => array(false, false),
            'marker_size'       => 6,
            'marker_type'       => array('circle'),
            'marker_colour'     => array('rgba(255,255,255)'),
            'decimal_digits_y'  => 1,
            'axis_min_v'        => $sacledMin,
            'axis_max_v'        => $scaledMax,
            'grid_division_v'   => ($scaledMax - $sacledMin) / 2
        );

        return new SVGGraph(420, 180, $settings);
    }

    public function chart(Request $request, $user)
    {
        $option = '体重';
        if ($request->has('option')) {
            $option = $request->input('option');
        }
        $date = strftime('%Y-%m-%d', time());
        if ($request->has('date')) {
            $date = $request->input('date');
        }

        $rows = BodyData::where('option', $option)
            ->where('user_id', $user)
            ->where('date', '<=', $date)
            ->orderBy('date', 'DESC')
            ->limit(5)
            ->get();
        $date2value = [];
        $min = PHP_INT_MAX;
        $max = PHP_INT_MIN;
        foreach ($rows as $row) {
            $date2value[str_replace('-', '/', substr($row['date'], 5, 5))] = $row['value'];
            if ($row['value'] < $min) {
                $min = $row['value'];
            }
            if ($row['value'] > $max) {
                $max = $row['value'];
            }
        }

        $date2value = array_reverse($date2value);
        $values = [$date2value];

        $graph = $this->getGrap($min, $max);

        $graph->values($values);
        $graph->render('LineGraph');
    }


    public function getPredefinedOptions()
    {
        $opts = [
            [
                'option' => '体重',
                'unit' => 'kg',
                'category' => 'basic'
            ],
            [
                'option' => '腰围',
                'unit' => 'cm',
                'category' => 'basic'
            ],
            [
                'option' => '胸围',
                'unit' => 'cm',
                'category' => 'basic'
            ],
            [
                'option' => '臀围',
                'unit' => 'cm',
                'category' => 'basic'
            ],
            [
                'option' => '大腿围L',
                'unit' => 'cm',
                'category' => 'basic'
            ],
            [
                'option' => '大腿围R',
                'unit' => 'cm',
                'category' => 'basic'
            ],
            [
                'option' => '大臂围L',
                'unit' => 'cm',
                'category' => 'basic'
            ],
            [
                'option' => '大臂围R',
                'unit' => 'cm',
                'category' => 'basic'
            ],
            [
                'option' => '小腿围L',
                'unit' => 'cm',
                'category' => 'basic'
            ],
            [
                'option' => '小腿围R',
                'unit' => 'cm',
                'category' => 'basic'
            ],
            [
                'option' => '体脂率',
                'unit' => '%',
                'category' => 'basic'
            ],
            [
                'option' => '体脂肪重量',
                'unit' => 'kg',
                'category' => 'basic'
            ],
            [
                'option' => '骨骼肌重量',
                'unit' => 'kg',
                'category' => 'basic'
            ],
            [
                'option' => 'BMI',
                'unit' => 'kg/m²',
                'category' => 'basic'
            ],
            [
                'option' => '腰臀比',
                'unit' => '腰/臀',
                'category' => 'basic'
            ],
            [
                'option' => '基础代谢',
                'unit' => 'Kcal/d',
                'category' => 'basic'
            ],
            [
                'option' => '静态心率',
                'unit' => 'bpm',
                'category' => 'basic'
            ],
            [
                'option' => '建议运动心率',
                'unit' => 'bpm',
                'category' => 'basic'
            ],
            [
                'option' => '卧推重量',
                'unit' => 'kg',
                'category' => '1rm'
            ],
            [
                'option' => '深蹲重量',
                'unit' => 'kg',
                'category' => '1rm'
            ],
            [
                'option' => '硬拉重量',
                'unit' => 'kg',
                'category' => '1rm'
            ]
        ];
        return response()->json($opts, 200);
    }
}
