<?php

use Illuminate\Database\Migrations\Migration;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Organization;
use App\User;

class AddFinancePermission extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // create permissions
        $permission = Permission::create(['name' => 'manage gym finance']);
        $orgManager = Role::findByName('org manager');
        $permission->assignRole($orgManager);
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
