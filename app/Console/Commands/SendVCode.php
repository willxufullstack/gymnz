<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;
use App\Http\Controllers\AuthController;

class SendVCode extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'vcode:send {phone} {vcode}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $mobile = $this->argument('phone');
        $vcode = $this->argument('vcode');

        $accessKeyId = config('services.ali.key');
        $accessSecret = config('services.ali.secret');
        AlibabaCloud::accessKeyClient($accessKeyId, $accessSecret)
            ->regionId('cn-hangzhou')
            ->asDefaultClient();

        try {
            $result = AlibabaCloud::rpc()
                ->product('Dysmsapi')
                // ->scheme('https') // https | http
                ->version('2017-05-25')
                ->action('SendSms')
                ->method('POST')
                ->host('dysmsapi.aliyuncs.com')
                ->options([
                    'query' => [
                        'RegionId' => "cn-hangzhou",
                        'PhoneNumbers' => $mobile,
                        'SignName' => "氧气教练Pro",
                        'TemplateCode' => AuthController::SMS_TEMPLATE_VCODE,
                        'TemplateParam' => json_encode(['code' => $vcode]),
                    ],
                ])
                ->request();
            dd(response()->json($result->toArray()));
        } catch (ClientException $e) {
            return response()->json(array('message' => $e->getErrorMessage()), 500);
        } catch (ServerException $e) {
            return response()->json(array('message' => $e->getErrorMessage()), 500);
        }
    }
}
