class Category < ApplicationRecord
  has_many :openings, dependent: :destroy
  has_many :filter_sets, dependent: :destroy
end
