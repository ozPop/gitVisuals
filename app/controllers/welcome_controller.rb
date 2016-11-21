class WelcomeController < ApplicationController

  def index
    if user_signed_in?
      # is this a good place update current_user?
      body_hash = helpers.get_github_user(current_user)
      current_user.update_attr(body_hash)
      followers = helpers.get_github_user_followers(current_user)
      following = helpers.get_github_user_following(current_user)
      current_user.update_followers(followers)
      current_user.update_followings(following)
      render 'index'
    else
      redirect_to new_user_session_path
    end
  end
end
