# == Schema Information
#
# Table name: batches
#
#  id                       :integer          not null, primary key
#  batch_photo_file_name    :string
#  batch_photo_content_type :string
#  batch_photo_file_size    :integer
#  batch_photo_updated_at   :datetime
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#

require 'test_helper'

class BatchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end