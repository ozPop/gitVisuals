class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable
  has_many :followers
  has_many :followings


 def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.username = auth.info.nickname
      user.password = Devise.friendly_token[0,20]
      user.token = auth.credentials.token
    end
  end

  def update_token(token)
    self.update_attributes({token: token})
  end

  def update_attr(attr)
    self.update_attributes({
      avatar_url: attr["avatar_url"],
      github_profile: attr["html_url"],
      repos_url: attr["repos_url"],
      public_repos: attr["public_repos"],
      public_gists: attr["public_gists"],
      total_followers: attr["followers"],
      total_following: attr["following"],
      followers_url: attr["followers_url"],
      following_url: attr["following_url"],
      github_created_at: attr["created_at"].to_datetime,
      github_updated_at: attr["updated_at"].to_datetime,
      starred_url: attr["starred_url"],
      gists_url: attr["gists_url"]
      })
  end

  def remove_extra_followers
    if @follower_logins.empty?
      self.followers.destroy_all
    else
      self.followers.each do |follower|
        if !@follower_logins.include?(follower.login)
          self.followers.destroy(Follower.find_by(id: follower.id))
        end
      end
    end

  end


  def remove_extra_followings
    if @following_logins.empty?
      self.followings.destroy_all
    else
      self.followings.each do |following|
        if !@following_logins.include?(following.login)
          self.followings.destroy(Following.find_by(id: following.id))
        end
      end
    end

  end

  def make_hash(hash)
    new_hash = {
      login: hash["login"],
      avatar_url: hash["avatar_url"],
      html_url: hash["html_url"]
    }
  end

  def update_followers(api_followers)
    @follower_logins = []
    api_followers.each do |follower|
      @follower_logins << follower["login"]
      if self.followers.where(login: follower["login"]).empty?
        self.followers.build(make_hash(follower))
      end
    end
    remove_extra_followers
    self.save
  end

  def update_followings(api_followings)
    @following_logins = []
    api_followings.each do |following|
      @following_logins << following["login"]
      if self.followings.where(login: following["login"]).empty?
        self.followings.build(make_hash(following))
      end
    end
    remove_extra_followings
    self.save
  end

end
