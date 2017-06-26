json.extract! batch, :id, :egg_coordinates, :created_at, :updated_at

json.thumbnail_photo batch.photo_url_thumb
json.small_photo batch.photo_url_small
json.large_photo batch.photo_url_large
