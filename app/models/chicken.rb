# == Schema Information
#
# Table name: chickens
#
#  id             :integer          not null, primary key
#  chicken_name   :string           not null
#  biography      :text
#  arrival_date   :string
#  departure_date :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Chicken < ActiveRecord::Base
end
