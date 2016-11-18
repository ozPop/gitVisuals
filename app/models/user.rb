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

  def update_followers(followers)
    followers.each do |follower|
      new_follower = {
        login: follower["login"],
        avatar_url: follower["avatar_url"],
        html_url: follower["html_url"]
      }
      self.followers.build(new_follower)
      self.save
    end
  end

  def update_followings(followings)
    followings.each do |following|
      new_following = {
        login: following["login"],
        avatar_url: following["avatar_url"],
        html_url: following["html_url"]
      }
      self.followings.build(new_following)
      self.save
    end
  end

end
