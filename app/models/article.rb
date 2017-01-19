class Article < ApplicationRecord

  has_many :coments
  belongs_to :user
end
