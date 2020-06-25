# Preview all emails at http://localhost:3000/rails/mailers/digest_mailer
class DigestMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/digest_mailer/daily_digest
  def daily_digest
    DigestMailer.daily_digest
  end

  # Preview this email at http://localhost:3000/rails/mailers/digest_mailer/weekly_digest
  def weekly_digest
    DigestMailer.weekly_digest
  end

end
