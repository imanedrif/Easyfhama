<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etudiant extends Model
{
    use HasFactory;
    protected $fillable=[
        'nom',
        'email',
        'filliere',
        'classe',
        'id_cours',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
}
