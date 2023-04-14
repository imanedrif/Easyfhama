<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $data['nom']='imane';
        $data['email']='imane@gmail.com';
        $data['password']=bcrypt(123456789);

        \App\Models\Admin::create($data);

        $Pdata['nom']='prof1';
        $Pdata['email']='prof@gmail.com';
        $Pdata['password']=bcrypt(1234567890);

        \App\Models\Prof::create($Pdata);





        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
