<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Prof extends Authenticatable
{
    use HasFactory,HasApiTokens;
    protected $guard = 'prof';

    protected $fillable=[
        'nom',
        'email',
        // 'id_cours',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];


    public function classe(): HasMany
    {
        return $this->hasMany(Classe::class, 'id_classe', 'id');
    }

    public function cours(): HasMany
    {
        return $this->hasMany(Cours::class, 'id_cours', 'id');
    }

    public function etudiants(): HasMany
    {
        return $this->hasMany(Etudiant::class, 'id_etudiant');
    }
}
