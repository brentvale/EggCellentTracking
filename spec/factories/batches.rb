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

FactoryGirl.define do
  factory :batch do
    
  end
end
