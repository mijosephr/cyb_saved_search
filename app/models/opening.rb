class Opening < ApplicationRecord
  belongs_to :category

  def as_json(options = nil)
    super({ only: [:id, :title], include: :category }.merge(options || {}))
  end
end
