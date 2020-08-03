<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model' => App\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
        'webhook' => [
            'secret' => env('STRIPE_WEBHOOK_SECRET'),
            'tolerance' => env('STRIPE_WEBHOOK_TOLERANCE', 300),
        ],
    ],

    'qn' => [
        'key' => env('QNACCESSKEY', 'null'),
        'secret' => env('QNSECRETKEY', 'null'),
        'bucket' => env('QNBUKET', 'null'),
    ],

    'wx' => [
        'id' => env('WX_APP_ID', 'null'),
        'secret' => env('WX_APP_SECRET', 'null'),

    ],

    'dianping' => [
        'key' => env('DIANPING_APP_KEY', 'null'),
        'secret' => env('DIANPING_APP_SECRET', 'null'),
    ],

    'ucpaas' => [
        'sid' => env('UCPAASSID', 'null'),
        'token' => env('UCPAASTOKEN', 'null'),
        'appId' => env('UCPAASAPPID', 'null'),
        'templateId' => env('UCPAASTEMPLATE', 'null'),
    ],

    'ali' => [
        'key' => env('ALI_KEY', 'null'),
        'secret' => env('ALI_SECRET', 'null'),
    ]
];
