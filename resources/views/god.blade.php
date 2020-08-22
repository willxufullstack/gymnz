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
<form method="post" action="/billing">
    {{csrf_field()}}
    <input name="account_id" type="number" placeholder="Account ID">
    <input name="point" type="number" placeholder="充值点数">
    <input name="paid" type="number" placeholder="实际支付">
    <input type="submit" value="提交">
</form>
<hr>
<table>
    <thead>
        <tr>
            <th> ID</th>
            <th> 余额 </th>
            <th> 店铺</th>
            <th> 账户</th>
        </tr>
    </thead>
    <tbody>
         @foreach($gyms as $gym)
          <tr>
              <td> {{$gym->account_id}} </td>
              <td> {{$billings[$gym->account_id] ?? 0}}</td>
              <td> {{$gym->name}} </td>
              <td> {{$gym->account ? $gym->account->user->name . ' / ' . $gym->account->user->email : '- -'}} </td>
          </tr>
         @endforeach
   </tbody>
</table>

</body>
</html>
