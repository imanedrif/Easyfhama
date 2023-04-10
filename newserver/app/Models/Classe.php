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
        // 'id_edudiant',
        // 'id_prof',
        // 'id_cours',
    ];

    protected $hidden = [
        'remember_token',
    ];

    public function Etudiant(): HasMany
    {
        return $this->hasMany(Etudiant::class, 'id_etudiant', 'id');
    }

    public function Prof(): belongsToMany
    {
        return $this->belongsToMany(Prof::class, 'id_prof', 'id');
    }

    public function cours():belongsToMany
    {
        return $this->belongsToMany(Cours::class);
    }
}
