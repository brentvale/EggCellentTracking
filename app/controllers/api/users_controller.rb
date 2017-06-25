class Api::UsersController < ApplicationController
  def current_user_signed_in
    render json: {user: current_user}
  end
end
