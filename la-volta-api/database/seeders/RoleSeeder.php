<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role1 = Role::create(['name' => 'Admin']);
        $role2 = Role::create(['name' => 'Affiliate']);

        Permission::create(['name' => 'admin'])->syncRoles([$role1, $role2]);

        Permission::create(['name' => 'admin.dashboard.index'])->syncRoles([$role1, $role2]);
        Permission::create(['name' => 'admin.dashboard.create'])->syncRoles([$role1, $role2]);
        Permission::create(['name' => 'admin.dashboard.edit'])->syncRoles([$role1, $role2]);
        Permission::create(['name' => 'admin.dashboard.destroy'])->syncRoles([$role1, $role2]);

        Permission::create(['name' => 'admin.profile.index'])->syncRoles([$role1, $role2]);
        Permission::create(['name' => 'admin.profile.create'])->syncRoles([$role1, $role2]);
        Permission::create(['name' => 'admin.profile.edit'])->syncRoles([$role1, $role2]);
        Permission::create(['name' => 'admin.profile.destroy'])->syncRoles([$role1, $role2]);

        
    }
}
