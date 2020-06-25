class User < ApplicationRecord
  has_secure_password
  validates_presence_of :email
  validates_uniqueness_of :email

  has_many :saved_searches, dependent: :destroy

  def as_json(options = nil)
    super({ only: [:id] }.merge(options || {}))
  end
end
