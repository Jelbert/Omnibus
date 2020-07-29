<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoleAccess extends Model
{
    protected $table = 'role_accesses';
    protected $guarded = [];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }
}
