<?php

use App\Coach;
use Illuminate\Database\Migrations\Migration;
use App\Organization;
use App\User;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class MigratePermission extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // create permissions
        Permission::create(['name' => 'access web']);
        Permission::create(['name' => 'manage org']);
        Permission::create(['name' => 'manage gym']);

        // create roles and assign existing permissions
        $gymMgr = Role::create(['name' => 'gym manager']);
        $gymMgr->givePermissionTo('manage gym');
        $gymMgr->givePermissionTo('access web');

        $orgMgr = Role::create(['name' => 'org manager']);
        $orgMgr->givePermissionTo('manage gym');
        $orgMgr->givePermissionTo('manage org');
        $orgMgr->givePermissionTo('access web');

        $gymMgr = Role::create(['name' => 'coach']);

        // grant all org manager
        $allOrgs = Organization::get();
        foreach ($allOrgs as $org) {
            $user = User::find($org->create_by);
            $user->assignRole('org manager');
        }

        // grant all coach
        $allCoaches = Coach::get();
        foreach ($allCoaches as $coach) {
            $user = User::find($coach->user_id);
            $user->assignRole('coach');
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
