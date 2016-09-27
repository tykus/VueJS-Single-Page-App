<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
  protected $appends = ['time'];

  protected $visible = ['id', 'title', 'body', 'views', 'time', 'cateogry_id'];

  public function category()
  {
    return $this->belongsTo(Category::class);
  }

  public function getTimeAttribute()
  {
    return $this->created_at->timestamp;
  }
}
