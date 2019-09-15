<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BodyData;
use App\User;
use Auth;


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
        $ret = BodyData::where('user_id', $userId)->orderBy('date', 'ASC')->get();

        // group
        if ($request->has('group')) {
            $ret = $this->groupDataByOption($ret);
        }

        return response()->json($ret, 200);
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


    public function getPredefinedOptions()
    {
        $opts = [
            [
                'option' => '体重',
                'unit' => 'kg',
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
