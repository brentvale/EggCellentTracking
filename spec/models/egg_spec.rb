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

require 'rails_helper'

RSpec.describe Egg, type: :model do
    subject { described_class.new }
    
    it "is valid with valid attributes" do
      subject.chicken_id = 1
      subject.batch_id= 1
      subject.batch_photo_position = "string less than 30"
      
      expect(subject).to be_valid
    end

    it "is not valid without a chicken_id" do 
      subject.chicken_id = nil
      
      expect(subject).to_not be_valid
    end
    
    it "is not valid if chicken_id is a non-integer" do 
      subject.chicken_id = "brent"
      
      expect(subject).to_not be_valid
    end
    
    it "is not valid without a batch_id" do 
      subject.batch_id = nil
      
      expect(subject).to_not be_valid
    end
    
    it "is not valid if batch_id is a non-integer" do 
      subject.batch_id = "brent"
      
      expect(subject).to_not be_valid
    end
    
end
