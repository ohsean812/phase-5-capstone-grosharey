class Grocery < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :users, through: :comments

    validates :name, :price, :quantity, :store, :date, presence: true
end
