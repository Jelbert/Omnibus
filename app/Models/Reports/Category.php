<?php

namespace App\Models\Reports;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    protected $guarded = [];

    public function reports()
    {
        return $this->hasMany(Form::class);
    }

    public function hasReport($category_id)
    {
        return $this->reports()->where('category_id', $category_id)->exists();
    }

}
