# == Schema Information
#
# Table name: eggs
#
#  id                   :integer          not null, primary key
#  chicken_id           :integer          default("-1"), not null
#  batch_id             :integer          not null
#  batch_photo_position :string(30)
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

require 'test_helper'

class EggTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
