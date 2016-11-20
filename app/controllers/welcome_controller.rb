class WelcomeController < ApplicationController

  def index
    if user_signed_in?
      # is this a good place update current_user?
      body_hash = helpers.get_github_user(current_user)
      current_user.update_attr(body_hash)
      render 'index'
    else
      redirect_to new_user_session_path
    end
  end
end
