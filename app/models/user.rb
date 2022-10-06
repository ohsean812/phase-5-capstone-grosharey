class User < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :groceries, through: :comments

    has_secure_password

    validates :username, presence: true, uniqueness: true, length: { in: 6..15 }
    validates :password, presence: true
    validates :password_confirmation, presence: true
end
