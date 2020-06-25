class FilterSet < ApplicationRecord
  belongs_to :category
  has_many :saved_searches, dependent: :destroy
end
