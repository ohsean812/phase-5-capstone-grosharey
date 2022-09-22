class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments, status: :ok
    end

    def show
        comment = Comment.find(params[:id])
        render json: comment, status: :ok
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    private
    
    def comment_params
        params.permit(:content, :user_id, :grocery_id)
    end

end
