class Grocery < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :users, through: :comments

    has_one_attached :image, :dependent => :destroy

    validates :name, :price, :quantity, :store, :date, presence: true

    def image_url
        Rails.application.routes.url_helpers.url_for(image) if image.attached?
    end

end
