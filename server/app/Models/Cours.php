<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    public function Etudiant(): BelongsToMany
    {
        return $this->belongsToMany(Etudiant::class);
    }

    public function classe(): BelongsTo
    {
        return $this->belongsTo(Classe::class, 'id_classe', 'id');
    }
}
