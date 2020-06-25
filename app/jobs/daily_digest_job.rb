class DailyDigestJob < ApplicationJob
  queue_as :default

  def perform(*args)
    FilterSet.find_each do |filter_set|
      openings = filter_set.category.openings

      filter_set.saved_searches.eligible_for_daily_digest.each do |saved_search|
        DigestMailer.with(
          user: saved_search.user,
          openings: openings
        ).daily_digest.deliver_now

        saved_search.last_sent_at = Time.zone.now
        saved_search.save
      end
    end
  end
end
