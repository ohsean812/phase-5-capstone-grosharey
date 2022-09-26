class Grocery < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :users, through: :comments

    has_one_attached :image

    validates :name, :price, :quantity, :store, :date, presence: true
end
