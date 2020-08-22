<?php

namespace App\Console\Commands;

use App\Account;
use App\Billing;
use App\Gym;
use App\User;
use Carbon\Carbon;
use Illuminate\Console\Command;

class AutoDeposit extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'billing:deposit {--gym=} {--point=} {--expired_at=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'auto deposit';

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
        $gymId = (int) $this->option('gym');
        $point = (int) $this->option('point');
        $expiredAt = $this->option('expired_at', null);

        if ($gymId) {
            $gym = Gym::find($gymId);
            $this->chargeGym($gym, $point, $expiredAt);
            return;
        }

        $allGyms = Gym::all();
        foreach($allGyms as $gym) {
            $this->chargeGym($gym, $point);
        }
    }

    private function chargeGym(Gym $gym, int $point, ?string $expiredAt=null)
    {
        $accountId = $gym->account_id;

        if (empty($accountId)) {
            return;
        }

        if (!$expiredAt) {
            $expiredAt = Carbon::now()->addMonth(1)->firstOfMonth()->format('Y-m-d');
        }

        $createdBy = User::find($gym->created_by);


        $billing = new Billing();
        $billing->operated_by = $createdBy->id;
        $billing->account_id = $accountId;
        $billing->point = $point;
        $billing->paid = 0;
        $billing->detail = 'auto deposit';
        $billing->expired_at = $expiredAt;

        $billing->save();
    }
}
