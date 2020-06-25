class SavedSearch < ApplicationRecord
  enum frequency: [:daily, :weekly]

  belongs_to :user
  belongs_to :filter_set

  scope :daily, -> { where(frequency: :daily) }
  scope :weekly, -> { where(frequency: :weekly) }
  scope :never_sent, -> { where(last_sent_at: nil) }
  scope :sent_more_than_a_week_ago, -> { where(last_sent_at: ..1.week.ago) }
  scope :eligible_for_daily_digest, -> { daily.never_sent | daily.sent_more_than_a_week_ago }
  scope :eligible_for_weekly_digest, -> { weekly.never_sent | weekly.sent_more_than_a_week_ago }
end
