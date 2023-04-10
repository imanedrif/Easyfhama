<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Etudiant;
use App\Models\Admin;
use App\Models\Prof;


class DefaultData extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data['nom'] = 'yassine';
        $data['email'] = 'yassine@gmail.com';
        $data['password'] = bcrypt(123456);

        Admin::create($data);

        $Edata['nom'] = 'imane';
        $Edata['email'] = 'imane@gmail.com';
        $Edata['filliere'] = 'science';
        $Edata['classe'] = '2bac';
        // $Edata['id_cours'] = random_int(2,3);
        $Edata['password'] = bcrypt(123456);


        Etudiant::create($Edata);
    }
}
