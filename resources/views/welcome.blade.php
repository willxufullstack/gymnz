<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <!-- Styles -->
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
            background-size: 300% 300%;

            -webkit-animation: linear-bg 20s ease infinite;
            -moz-animation: linear-bg 20s ease infinite;
            animation: linear-bg 20s ease infinite;
        }

        html,
        body {
            background-color: #fff;
            color: #636b6f;
            font-family: 'Nunito', sans-serif;
            font-weight: 200;
            height: 100vh;
            margin: 0;
        }

        .o2-btn {
            border-radius: 6px;
            color: white;
            border: 2px solid white;
            color: white !important;
            padding: 6px 18px !important;
            margin: 0 24px;
        }

        .o2-btn:hover {
            color: #8e24aa !important;
            background: white;
            font-weight:  600;
        }

        .full-height {
            height: 100vh;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: relative;
        }

        .top-right {
            position: absolute;
            right: 10px;
            top: 18px;
        }

        .content {
            text-align: center;
        }

        .title {
            font-size: 84px;
        }

        .links>a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        .m-b-md {
            margin-bottom: 30px;
        }
    </style>
</head>

<body class="linear-dynamic-bg">
    <div class="flex-center position-ref full-height">
        <!-- @if (Route::has('login'))
        <div class="top-right links">
            @auth
            <a href="{{ url('/home') }}">Home</a>
            @else
            <a href="{{ route('login') }}">Login</a>

            @if (Route::has('register'))
            <a href="{{ route('register') }}">Register</a>
            @endif
            @endauth
        </div>
        @endif -->
        <div class="content">
            <div class="title m-b-md" style="color:rgba(255, 255,255 ,0.7); font-size: 60px">
                氧气健身
            </div>
            <div class="links">
                @if (Route::has('login'))

                @auth
                <a class="o2-btn" href="{{ url('/home') }}">进入</a>
                @else
                <a class="o2-btn" href="{{ route('login') }}">登录</a>

                @if (Route::has('register'))
                <a class="o2-btn" href="{{ route('register') }}">注册</a>
                @endif
                @endauth
                @endif
                <!-- <a href="https://laravel.com/docs">Docs</a>
            <a href="https://laracasts.com">Laracasts</a> -->
            </div>
        </div>
    </div>
</body>
<script>
    let hasLogin = {{ Auth::user() ? 'true' : 'false' }};
    if (hasLogin) {
        window.location.href = "/home";
    }
</script>

</html>