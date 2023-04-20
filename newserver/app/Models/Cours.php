<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    use HasFactory;
    protected $fillable=[
        'nom',
        'date',
        // 'id_classe',
    ];

    public function prof(): BelongsTo
    {
        return $this->belongsTo(Prof::class, 'id_prof', 'id');
    }

    public function classe(): BelongsTo
    {
        return $this->belongsTo(Classe::class, 'id_classe', 'id');
    }

    public function etudiants(): BelongsToMany
    {
        return $this->belongsToMany(Etudiant::class, 'id_prof', 'id', 'id_etudiant')
            ->withPivot('status')
            ->withTimestamps();
    }
}
