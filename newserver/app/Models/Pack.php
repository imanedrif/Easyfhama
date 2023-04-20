<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pack extends Model
{
    protected $fillable = ['name', 'price'];

    public function etudiants()
    {
        return $this->belongsToMany(Etudiant::class, 'etudiant_pack', 'pack_id', 'etudiant_id')
                    ->withTimestamps();
    }
}
