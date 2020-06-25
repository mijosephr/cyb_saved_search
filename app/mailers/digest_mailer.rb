class DigestMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.digest_mailer.daily_digest.subject
  #
  def daily_digest
    @user = params[:user]
    @openings = params[:openings]
    mail to: @user.email, subject: 'Daily Digest'
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.digest_mailer.weekly_digest.subject
  #
  def weekly_digest
    @user = params[:user]
    @openings = params[:openings]
    mail to: @user.email, subject: 'Weekly Digest'
  end
end
