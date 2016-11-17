class UsersController < ApplicationController

  def show
    # url = 'https://api.github.com/users/' + current_user.username
    # @resp = Faraday.get url do |req|
    #     req.params['access_token'] = current_user.token
    #   end
    #   body_hash = JSON.parse(@resp.body)
    #   current_user.update_attr(body_hash)
    #   render 'show'
  end

end
