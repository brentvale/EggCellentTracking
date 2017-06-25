# == Schema Information
#
# Table name: batches
#
#  id                       :integer          not null, primary key
#  batch_photo_file_name    :string
#  batch_photo_content_type :string
#  batch_photo_file_size    :integer
#  batch_photo_updated_at   :datetime
#  egg_coordinates          :text
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#

class Batch < ActiveRecord::Base
  has_many :eggs
  
  has_attached_file :batch_photo, 
    styles: { thumb: {geometry: "200x200>", auto_orient: true},
              small: {geometry: "400x400>", auto_orient: true},
              large: {geometry: "1000x1000>", auto_orient: true}
            }
    
  validates :batch_photo,
    attachment_content_type: {:content_type => ["image/jpg", "image/jpeg", "image/png"]},
    attachment_size: {less_than: 5.megabytes}
    
    def photo_url_small
      self.batch_photo.url(:small)
    end
  
    def photo_url_thumb
      self.batch_photo.url(:thumb)
    end 
    
end
