<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>氧气God</title>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
</head>

<body>

<table>
    <thead>
        <tr>
            <th> ID</th>
            <th> 店铺</th>
            <th> 账户</th>
        </tr>
    </thead>
    <tbody>
         @foreach($gyms as $gym)
          <tr>
              <td> {{$gym->id}} </td>
              <td> {{$gym->name}} </td>
              <td> {{$gym->account ? $gym->account->user->name . ' / ' . $gym->account->user->email : '- -'}} </td>
          </tr>
         @endforeach
   </tbody>
</table>

</body>
</html>
