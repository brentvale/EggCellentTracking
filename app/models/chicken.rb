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
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Chicken < ActiveRecord::Base
    has_attached_file :photo
    # Validate content type
    validates_attachment_content_type :photo, content_type: /\Aimage/
    # Validate filename
    validates_attachment_file_name :photo, matches: [/png\z/, /jpe?g\z/, /JPG/, /PNG/]
end
