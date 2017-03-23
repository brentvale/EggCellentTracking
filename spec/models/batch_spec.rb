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

require 'rails_helper'

RSpec.describe Batch, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
