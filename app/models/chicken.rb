# == Schema Information
#
# Table name: chickens
#
#  id                 :integer          not null, primary key
#  chicken_name       :string           not null
#  photo_file_name    :string
#  photo_content_type :string
#  photo_file_size    :integer
#  photo_updated_at   :datetime
#  biography          :text
#  arrival_date       :string
#  departure_date     :string
#  breed              :string
#  egg_description    :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Chicken < ActiveRecord::Base
    has_attached_file :photo, 
      styles: { thumb: {geometry: "200x150", auto_orient: true},
                small: {geometry: "400x300", auto_orient: true},
                large: {geometry: "800x600", auto_orient: true}
              }
      
    validates_attachment :photo, 
      content_type: { content_type: ["image/jpeg", "image/jpg", "image/png"] },
      attachment_size: {less_than: 5.megabytes}
      
    def photo_url_small
      self.photo.url(:small)
    end

    def photo_url_thumb
      self.photo.url(:thumb)
    end
end
