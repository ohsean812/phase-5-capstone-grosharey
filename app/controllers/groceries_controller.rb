class GroceriesController < ApplicationController

  before_action :set_grocery, only: %i[ show update destroy ]
  skip_before_action :authorize, only: [:index, :show]

  # GET /groceries
  def index
    groceries = Grocery.all
    render json: groceries, status: :ok
  end

  # GET /groceries/1
  def show
    grocery = Grocery.find(params[:id])
    render json: grocery, status: :ok
  end

  # POST /groceries
  def create
    if (user)
      grocery = Grocery.create!(grocery_params)
      render json: grocery, status: :created
    else
      return render json: {error: ["Not authorized"]}, status: :unauthorized
    end
    # @grocery = Grocery.new(grocery_params)

    # if @grocery.save
    #   render json: @grocery, status: :created, location: @grocery
    # else
    #   render json: @grocery.errors, status: :unprocessable_entity
    # end
  end

  # PATCH/PUT /groceries/1
  def update
    grocery.update!(grocery_params)
    render json: grocery, status: :accepted
  end

  # DELETE /groceries/1
  def destroy
    grocery.destroy
    head :no_content
  end


  private

    # Use callbacks to share common setup or constraints between actions.
    def set_grocery
      grocery = Grocery.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def grocery_params
      params.permit(:name, :price, :quantity, :store, :date)
    end

end
