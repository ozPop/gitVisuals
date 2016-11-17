class WelcomeController < ApplicationController
  def index
    if current_user
      url = 'https://api.github.com/users/' + current_user.username
      @resp = Faraday.get url do |req|
          req.params['access_token'] = current_user.token
        end
      body_hash = JSON.parse(@resp.body)
      current_user.update_attr(body_hash)
      redirect_to user_path(current_user)
    else
      redirect_to new_user_session_path
    end
  end
end
