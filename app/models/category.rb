class Category < ApplicationRecord
  has_many :openings, dependent: :destroy
  has_many :filter_sets, dependent: :destroy

  def as_json(options = nil)
    super({ only: [:id, :name] }.merge(options || {}))
  end
end
