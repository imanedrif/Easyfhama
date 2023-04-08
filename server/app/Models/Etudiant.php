<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Sanctum\HasApiTokens;

class Etudiant extends Authenticatable
{
    use HasFactory,HasApiTokens;

    protected $guard = 'etudiant';

    protected $fillable=[
        'nom',
        'email',
        'filliere',
        'classe',
        // 'id_cours',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function Etudiantcours(): belongsToMany
    {
        return $this->BelongsToMany(Cours::class, 'id_prof', 'id');
    }

    public function prof(): HasMany
    {
        return $this->hasMany(Prof::class, 'id_prof', 'id');
    }
}
