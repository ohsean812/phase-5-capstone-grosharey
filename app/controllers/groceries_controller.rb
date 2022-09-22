class GroceriesController < ApplicationController
  before_action :set_grocery, only: %i[ show update destroy ]

  # GET /groceries
  def index
    @groceries = Grocery.all
    render json: @groceries
  end

  # GET /groceries/1
  def show
    render json: @grocery
  end

  # POST /groceries
  def create
    grocery = Grocery.create!(grocery_params)
    render json: grocery, status: :created
    # @grocery = Grocery.new(grocery_params)

    # if @grocery.save
    #   render json: @grocery, status: :created, location: @grocery
    # else
    #   render json: @grocery.errors, status: :unprocessable_entity
    # end
  end

  # PATCH/PUT /groceries/1
  def update
    if @grocery.update(grocery_params)
      render json: @grocery
    else
      render json: @grocery.errors, status: :unprocessable_entity
    end
  end

  # DELETE /groceries/1
  def destroy
    @grocery.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_grocery
      @grocery = Grocery.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def grocery_params
      params.permit(:name, :price, :quantity, :store, :date)
    end
end
