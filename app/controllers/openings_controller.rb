class OpeningsController < ApplicationController
  def index
    render json: Opening.all
  end
end
