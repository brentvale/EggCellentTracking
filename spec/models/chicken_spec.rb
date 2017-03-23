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

require 'rails_helper'

RSpec.describe Chicken, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
