module ApiHelper
  def get_github_user(user)
    url = 'https://api.github.com/users/' + user.username
    @resp = Faraday.get url do |req|
      req.params['access_token'] = user.token
    end
    JSON.parse(@resp.body)
  end

  def get_github_user_followers(user)
    url = user.followers_url
    @resp = Faraday.get url do |req|
      req.params['access_token'] = user.token
    end
    JSON.parse(@resp.body)
  end
end
