class Coment < ApplicationRecord

  belongs_to :article, counter_cache: true, dependent: :destroy
  belongs_to :user

end
