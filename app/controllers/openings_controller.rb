class OpeningsController < ApplicationController
  def index
    scope_to_category = params[:categoryId] && params[:categoryId] != "0"
    puts scope_to_category

    if scope_to_category
      category = Category.find(params[:categoryId])
      render json: category.openings
    else
      render json: Opening.all
    end
  end
end
