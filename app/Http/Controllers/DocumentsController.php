<?php

namespace App\Http\Controllers;

use App\Documents;
use Auth;
use Illuminate\Http\Request;

class DocumentsController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param $gymId
     * @return mixed
     */
    public function index(Request $request, $gymId)
    {
        return Documents::where("gym_id", $gymId)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * api/gym/{gymId}/documents/{document}
     */
    public function update(Request $request, $gymId, $documentId)
    {
        $doc = Documents::find($documentId);
        if (!$doc) {
            return response()->json(array('message' => 'fail'), 500);
        }

        $data = $request->all()['document'];
        $success = $doc->update($data);
        if ($success) {
            return response()->json($data, 200);
        }
        return response()->json(array('message' => 'fail'), 500);
    }


    /**
     * Store a newly created resource in storage.
     *
     * api/gym/{gymId}/documents
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request, $gymId)
    {
        $request->validate([
            'title' => 'required|max:255',
            'file_path' => 'required'
        ]);

        $doc = new Documents();
        $doc->title = $request->input('title');
        $doc->author = $request->input('author');
        $doc->description = $request->input('description');
        $doc->file_path = $request->input('file_path');
        $doc->gym_id = $gymId;
        $doc->save();

        return redirect("/documents");
    }

}
