class GroceryCommentsController < ApplicationController

    before_action :authorize

    def show
        render json: Comment.where(grocery_id: params[:id])
    end

end
