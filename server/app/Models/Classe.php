<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classe extends Model
{
    use HasFactory;
    protected $fillable=[
        'nom',
        'filliere',
        'id_edudiant',
        'id_prof',
        'id_cours',
    ];

    protected $hidden = [
        'remember_token',
    ];
}
