class SignupsController < ApplicationController
  def create
    user = User.create!(email: params[:email], password: params[:password])
    if user
      session[:user_id] = user.id
      render json: user, status: 201
    else
      render json: {}, status: 401
    end
  end
end
