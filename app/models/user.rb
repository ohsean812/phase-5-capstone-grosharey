class User < ApplicationRecord
    has_many :comments
    has_many :groceries, through: :comments

    has_secure_password
end
