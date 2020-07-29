<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function accesses()
    {
        return $this->hasMany(RoleAccess::class);
    }

    public function hasAccess($route)
    {
        return $this->accesses()->where('route', $route)->exists();
    }
}
