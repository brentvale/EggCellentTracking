class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
         
 validate :user_in_list

 def user_in_list
  possible_emails = ["brentvale@gmail.com", "leslie.perryman@gmail.com"]
  if email.present? && !possible_emails.include?(email)
    errors.add(:email, "Thank you for your interest!  We aren't currently registering users.")
  end
 end
   
end
