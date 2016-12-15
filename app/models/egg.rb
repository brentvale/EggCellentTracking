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

class Egg < ActiveRecord::Base
  validates :chicken_id, :batch_id, presence: true
  validates :chicken_id, :batch_id, numericality: { only_integer: true }
end
