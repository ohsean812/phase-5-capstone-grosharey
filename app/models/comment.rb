class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :grocery

  validates :content, :user_id, :grocery_id, presence: true
end
