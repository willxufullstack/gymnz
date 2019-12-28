<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>氧气</title>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <!-- Styles -->
    <link href="{{ asset('css/app-release.css') }}" rel="stylesheet">
</head>

<body>
    <form id="logout-form" action="{{ route('logout') }}" method="POST">
        @csrf
    </form>
    <div id="app">
    </div>
</body>
<!-- Scripts -->
<script>
    const SELECTED_GYM_KEY = 'gymnz_selected_gym';
    var LogoutFunc = function() {
        // should also clean local storage
        if (localStorage) {
            localStorage.removeItem(SELECTED_GYM_KEY);
        }
        document.getElementById('logout-form').submit();
    };
    var token = "{{Auth::user() ? JWTAuth::fromUser(Auth::user()) : "
    " }}";
    var username = "{{ Auth::user() ? Auth::user()->name : "
    GUEST " }}";
</script>
<!-- <script src="http://static.o2-fit.com/pro/js/manifest.js?v=9" defer></script>
<script src="http://static.o2-fit.com/pro/js/vendor.js?v=9" defer></script>
<script src="http://static.o2-fit.com/pro/js/app.js?v=9" defer></script> -->
<script src="{{ asset('js/manifest.js') }}?v=31" defer></script>
<script src="{{ asset('js/vendor.js') }}?v=31" defer></script>
<script src="{{ asset('js/app.js') }}?v=31" defer></script>
</html>
