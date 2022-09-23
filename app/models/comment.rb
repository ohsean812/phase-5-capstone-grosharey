class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :grocery

  validates :user_id, :game_id, presence: true
end
