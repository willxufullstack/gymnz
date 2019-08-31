<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>氧气</title>

    {{--<!-- Scripts -->--}}

    {{--<script src="{{ asset('js/manifest.js') }}" defer></script>--}}
    {{--<script src="{{ asset('js/vendor.js') }}" defer></script>--}}
    {{--<script src="{{ asset('js/app.js') }}" defer></script>--}}

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
        @-webkit-keyframes linear-bg {
            0% {
                background-position: 0% 50%
            }

            50% {
                background-position: 100% 50%
            }

            100% {
                background-position: 0% 50%
            }
        }

        @-moz-keyframes linear-bg {
            0% {
                background-position: 0% 50%
            }

            50% {
                background-position: 100% 50%
            }

            100% {
                background-position: 0% 50%
            }
        }

        @keyframes linear-bg {
            0% {
                background-position: 0% 50%
            }

            50% {
                background-position: 100% 50%
            }

            100% {
                background-position: 0% 50%
            }
        }

        .linear-dynamic-bg {
            background: linear-gradient(120deg, #f43b47, #453a94, #874da2);
            background-size: 600% 600%;

            -webkit-animation: linear-bg 20s ease infinite;
            -moz-animation: linear-bg 20s ease infinite;
            animation: linear-bg 20s ease infinite;

            position: absolute;
            min-height: 100%;
            min-width: 100%;

        }

        .card {
            background: rgba(255, 255, 255, 0.1);
            color: white;
        }

        .btn-primary {
            border-radius: 6px;
            color: white;
            border: 2px solid white;
            color: white !important;
            padding: 6px 18px !important;
            margin: 0 24px;
            background: initial;
        }

        .btn-primary:hover {
            color: #8e24aa !important;
            background: white;
            font-weight:  600;
            border-color: white;
        }

        .btn-link {
            color: #fff;
        }

        .btn-link:hover {
            color: #fff;
        }
    </style>
</head>

<body>
    <div id="app" class="linear-dynamic-bg">
        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>

</html>