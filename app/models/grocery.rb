class Grocery < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :users, through: :comments

    has_one_attached :image, :dependent => :destroy

    validates :name, :price, :quantity, :store, :date, presence: true
    validates :name, length: { maximum: 25 }
    validates :price, numericality: { less_than: 1000 }
    validates :quantity, length: { maximum: 12 }
    validates :store, length: { maximum: 12 }

    def image_url
        Rails.application.routes.url_helpers.url_for(image) if image.attached?
    end

end
