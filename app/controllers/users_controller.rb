class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]
    
# DO I NEED INDEX AND SHOW?
    def index
        render json: User.all
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end
# DO I NEED INDEX AND SHOW?

    def get_logged_in
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
