<?php

namespace App\Models\Reports;

use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'reports_forms';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true;


    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'category_id' ,'pentaho_id', 'fields'];

    /**
     * The attributes that are appended.
     *
     * @var array
     */
    protected $appends = ['created_mm_dd_yyyy'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'fields' => 'array',
    ];

    public function getCreatedAttribute() {
        if (empty($this->created_at)) {
            return null;
        }

        return $this->created_at->toFormattedDateString();
    }

    public function getCreatedMmDdYyyyAttribute() {
        if (empty($this->created_at)) {
            return null;
        }

        return $this->created_at->format('m-d-Y');
    }

    public function setCreatedDateAttribute( $value ) {
        try {
            $this->attributes['created_at'] = new Carbon($value);
        } catch (\Exception $exception) {
            $this->attributes['created_at'] = now();
        }
    }
}
