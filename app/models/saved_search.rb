class SavedSearch < ApplicationRecord
  enum frequency: [:daily, :weekly]

  belongs_to :user
  belongs_to :filter_set
end
