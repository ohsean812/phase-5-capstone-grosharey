class GroceriesController < ApplicationController

  # before_action :set_grocery, only: %i[ show update destroy ]
  skip_before_action :authorize, only: [:index, :show, :grocery_image, :groceries_images]

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
      grocery = Grocery.create!(grocery_params)
      render json: grocery, status: :created
  end
  
  # PATCH/PUT /groceries/1
  def update
    grocery = Grocery.find(params[:id])
    grocery.update!(grocery_params)
    render json: grocery, status: :accepted
  end

  # DELETE /groceries/1
  def destroy
    grocery = Grocery.find(params[:id])
    grocery.destroy
    head :no_content
  end

  def latest
    # grocery = Grocery.find(params[:id])
    grocery = Grocery.last
    render json: GrocerySerializer.new(grocery).serializable_hash[:data][:attributes]
  end

  def groceries_images
    groceries = Grocery.all
    groceries_mapped = groceries.map{|grocery| GrocerySerializer.new(grocery).serializable_hash[:data][:attributes]}
    render json: groceries_mapped
  end


  def grocery_image
    grocery = Grocery.find(params[:id])
    render json: GrocerySerializer.new(grocery).serializable_hash[:data][:attributes]
  end


  private

    # Use callbacks to share common setup or constraints between actions.
    # def set_grocery
    #   grocery = Grocery.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def grocery_params
      params.permit(:name, :price, :quantity, :store, :date, :owner, :image)
    end

end