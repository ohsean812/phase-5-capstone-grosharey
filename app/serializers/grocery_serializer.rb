class GrocerySerializer
  include JSONAPI::Serializer
  attributes :id, :name, :price, :quantity, :store, :date, :owner, :image, :created_at, :updated_at, :image_url
end
