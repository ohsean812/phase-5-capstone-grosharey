class GroceryCommentsController < ApplicationController

    skip_before_action :authorize

    def show
        render json: Comment.where(grocery_id: params[:id])
    end

end
