class CreateBatches < ActiveRecord::Migration
  def change
    create_table :batches do |t|
      t.attachment :batch_photo
      
      t.timestamps null: false
    end
  end
end
