class SessionsController < ApplicationController
  include CurrentUserConcern

  def create
    user = User.find_by(email: params[:email]).try(:authenticate, params[:password])
    if user
      session[:user_id] = user.id
      render json: user, status: 201
    else
      render json: {}, status: 401
    end
  end

  def show
    if @current_user
      render json: @current_user
    else
      render json: {}, status: 404
    end
  end

  def destroy
    reset_session
    render json: {}, status: 200
  end
end
