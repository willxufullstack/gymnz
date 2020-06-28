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
    <link href="{{ asset('css/app-release.css')}}?v=53" rel="stylesheet">
    <style>
        body {
            font-family: Nunito,sans-serif;
            font-size: .9rem;
            font-weight: 400;
            line-height: 1.6;
            color: #212529;
            text-align: left;
            margin: 0;
        }
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

        .container {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
            max-width: 540px;
            margin-top: 60px;
        }

        .card {
            position: relative;
            display: -webkit-box;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
            background-color: #fff;
            background-clip: initial;
            border: 1px solid rgba(0,0,0,.125);
            border-radius: .25rem;
            background: rgba(255, 255, 255, 0.1);
            color: white;
        }

        .row {
            display: flex;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;
        }

        .justify-content-center {
            -webkit-box-pack: center!important;
            justify-content: center!important;
        }

        .col-md-8, .col-md-6, .col-md-4 {
            position: relative;
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
        }

        .card-header {
            padding: .75rem 1.25rem;
            margin-bottom: 0;
            background-color: rgba(0,0,0,.03);
            border-bottom: 1px solid rgba(0,0,0,.125);
            border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
        }

        .card-body {
            flex: 1 1 auto;
            padding: 1.25rem;
        }

        .form-group {
            margin-bottom: 1rem;
        }

        .form-group > div {
            display: flex;
        }
        .bottom-row {
            justify-content: center;
            align-items: center;
        }

        .col-form-label {
            padding-top: calc(.375rem + 1px);
            padding-bottom: calc(.375rem + 1px);
            margin-bottom: 0;
            font-size: inherit;
            line-height: 1.6;
        }

        input {
            -webkit-writing-mode: horizontal-tb !important;
            text-rendering: auto;
            color: -internal-light-dark-color(black, white);
            letter-spacing: normal;
            word-spacing: normal;
            text-transform: none;
            text-indent: 0px;
            text-shadow: none;
            display: inline-block;
            text-align: start;
            -webkit-appearance: textfield;
            background-color: -internal-light-dark-color(rgb(255, 255, 255), rgb(59, 59, 59));
            -webkit-rtl-ordering: logical;
            cursor: text;
            margin: 0em;
            font: 400 13.3333px Arial;
            padding: 1px 2px;
            border-width: 2px;
            border-style: inset;
            border-color: -internal-light-dark-color(rgb(118, 118, 118), rgb(195, 195, 195));
            border-image: initial;

        }

        .form-control {
            display: block;
            width: 100%;
            height: calc(1.6em + .75rem + 2px);
            padding: .375rem .75rem;
            font-size: .9rem;
            font-weight: 400;
            line-height: 1.6;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: .25rem;
            -webkit-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        }

        .invalid-feedback {
            color: #fff;
            margin: auto;
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