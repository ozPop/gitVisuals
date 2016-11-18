class WelcomeController < ApplicationController

  def index
    if current_user
      # is this a good place update current_user?
      body_hash = helpers.get_github_user(current_user)
      followers = helpers.get_github_user_followers(current_user)
      following = helpers.get_github_user_following(current_user)
      current_user.update_attr(body_hash)
      current_user.update_followers(followers)
      current_user.update_followings(following)
      redirect_to user_path(current_user)
    else
      redirect_to new_user_session_path
    end
  end
end
