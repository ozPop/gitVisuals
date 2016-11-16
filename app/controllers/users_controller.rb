class UsersController < ApplicationController

  def show
    binding.pry
    url = 'https://api.github.com/users/' + current_user.username
    @resp = Faraday.get url do |req|
        req.params['access_token'] = current_user.token
      end
      binding.pry
      render 'show'
  end

end
