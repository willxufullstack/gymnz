<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <title>氧气TV</title>
    <style>
        @font-face {
            font-family: 'Nico Moji';
            src: url("/images/NicoMoji-Regular.ttf");
        }

        body {
            background: #2f2f2f;
            font-family: Roboto, Helvetica, Arial, sans-serif;
        }

        .logo {
            width: 120px;
            position: absolute;
            top: 64px;
            right: 12px;
        }

        .month {
            font-family: 'Nico Moji';
            font-style: normal;
            font-weight: 400;
            font-size: 108px;
            line-height: 108px;
            padding: 8px;
            /* identical to box height */
            background: linear-gradient(94.88deg, #29AA99 -5.46%, #89ECC2 109.1%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }

        .hotmap {
            width: 240px;
            margin-top: 12px;
        }

        .hotmap>span {
            display: inline-block;
            width: 18px;
            height: 18px;
            border-radius: 6px;
            margin: 0px;

        }

        .hotmap>.hot-0 {
            background: rgba(255, 255, 255, 0.5);
        }

        .hotmap>.hot-1 {
            background: #89ECC2;

        }

        .top {
            width: 80%;
            margin: 24px auto;
            border-radius: 24px;
            display: flex;
            padding: 6px 12px 16px 12px;
            align-items: flex-start;
            position: relative;
        }

        .medal {
            width: 112px;
        }

        .top-detail {
            padding: 12px 24px 6px 24px;
        }

        .top-user-name {
            font-size: 1.8rem;
            font-weight: 900;
            color: #333;
            letter-spacing: 4px;
        }

        .top-0 {
            background: linear-gradient(101.65deg, #FFD700 0.7%, #F8EFC4 90.74%);
        }

        .top-1 {
            background: linear-gradient(101.65deg, #D2D2D2 0.7%, #D9F0E6 90.74%);
        }

        .top-2 {
            background: linear-gradient(101.65deg, #E99D57 0.7%, #FFEFE1 90.74%);
        }

        .top-corner {
            position: absolute;
            left: 62px;
            top: 18px;
            margin-top: 52px;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            color: #7F8188;
            font-weight: 900;
            font-size: 1.8rem;
        }

        .top-corner-0 {
            color: #FFF8D3;
        }

        .top-corner-1 {
            color: #a5a5a5;
        }

        .top-corner-2 {
            color: #D78100;
        }

        .other-rank {
            display: inline-flex;
            background: #707070;
            margin: 8px 8px;
            border-radius: 24px;
            align-items: center;
            padding: 4px 24px 4px 12px;
        }

        .other-times {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #C4C4C4;
            border: 8px solid #7F8188;
            border-radius: 50%;
            color: #7F8188;
            font-weight: 900;
            font-size: 1.4rem;
        }

        .other-user-name {
            margin-left: 12px;
            font-weight: 900;
            font-size: 1.4rem;
            color: #DCDCDC;
            letter-spacing: 4px;
        }
    </style>
</head>

<body>
    <img class="logo" src="/images/logo_pro.png?v=20220503" />
    <div>
        <a class="month">{{$month}}</a>
        @foreach($timesToUsers as $i => $user)
        @if($i < 3) <div class="top top-{{$i}}">
            <!-- <div>{{$user->course_amount}}</div> -->
            <img class="medal" src='{{ asset("images/medal-$i.svg") }}' />
            <div class="top-detail">
                <div class="top-user-name">{{ $user->maskedName }}</div>
                <div class="hotmap">
                    @foreach(str_split($user->hotmap) as $m)
                    <span class="hot-{{$m}}"></span>
                    @endforeach
                </div>
            </div>
            <div class="top-corner top-corner-{{$i}}">
                {{$user->course_amount}}
            </div>
    </div>
    @else
    <div class="other-rank">
        <div class="other-times">{{$user->course_amount}}</div>
        <div class="other-user-name">{{ $user->maskedName }}</div>
    </div>
    @endif
    @endforeach
    </div>
</body>
<script>
    setInterval(function() {
        location.reload();
    }, 1000 * 60)
</script>

</html>