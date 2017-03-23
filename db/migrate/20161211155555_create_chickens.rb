class CreateChickens < ActiveRecord::Migration
  def change
    create_table :chickens do |t|
      t.string  :chicken_name, null: false
      t.attachment :photo
      t.text    :biography
      t.string  :arrival_date
      t.string  :departure_date
      t.string  :breed
      t.string  :egg_description
      
      t.timestamps null: false
    end
  end
end
