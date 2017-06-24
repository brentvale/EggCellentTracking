json.extract! chicken, :id, :chicken_name, :created_at, :updated_at, :biography, :arrival_date, :departure_date, :breed

json.thumbnail_photo chicken.photo_url_thumb
json.small_photo chicken.photo_url_small
