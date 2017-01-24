class Article < ApplicationRecord

  has_many :coments, dependent: :destroy
  belongs_to :user
end
