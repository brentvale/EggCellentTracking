class CreateEggs < ActiveRecord::Migration
  def change
    create_table :eggs do |t|
      t.integer :chicken_id, null: false, default: -1
      t.integer :batch_id, null: false
      t.string :batch_photo_position, limit: 30
      t.timestamps null: false
    end
    add_index :eggs, :chicken_id
    add_index :eggs, :batch_id
  end
end
