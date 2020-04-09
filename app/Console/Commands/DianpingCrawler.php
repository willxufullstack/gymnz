<?php

namespace App\Console\Commands;

use DateTime;
use DateTimeZone;
use GuzzleHttp\Client;

class DianpingCrawler
{
    private $session;
    private $appSecret;
    private $appKey;

    public function __construct(string $appKey, string $appSecret, string $session)
    {
        $this->appKey = $appKey;
        $this->session = $session;
        $this->appSecret = $appSecret;
    }

    public function getDayTraffic(string $shopId, string $day, string $platform='ALL'){
        $params = [
            'open_shop_uuid' => $shopId,
            'platform' => $platform,
            'start_date' => $day,
            'end_date' => $day
        ];
        return $this->get('https://openapi.dianping.com/router/merchant/data/poitraffic', $params);
    }

    private function get(string $url, array $params){
        $client = new Client();
        $mergedParams = array_merge($params,$this->getCommonParameters());
        $mergedParams['sign'] = $this->getSign($mergedParams);

        // dd(http_build_query($mergedParams));
        $queryParams = '';
        foreach($mergedParams as $key=>$value) {
            $queryParams.=$key;
            $queryParams.='=';
            $queryParams.=$value;
            $queryParams.='&';
        }
        $queryParams = substr($queryParams, 0, -1);
        $resp = $client->get($url.'?'.$queryParams);
        return json_decode($resp->getBody(),true);
    }

    private function getCommonParameters(): array {
        $date = new DateTime("now", new DateTimeZone('Asia/Shanghai'));
        return [
            'session' => $this->session,
            'app_key' => $this->appKey,
            'format' => 'json',
            'sign_method' => 'MD5',
            'timestamp' => $date->format('Y-m-d H:i:s'),
            'v'=>'1'
        ];
    }

    private function getSign(array $params): string
    {
        ksort($params);
        $combinedParams = '';
        foreach ($params as $key => $value) {
            $combinedParams .= $key;
            $combinedParams .= $value;
        }
        return md5($this->appSecret.$combinedParams.$this->appSecret);
    }
}
