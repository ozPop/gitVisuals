class GithubUserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar_url, :github_profile, :public_repos, :public_gists, :followers, :following, :github_created_at, :github_updated_at, :starred_url, :gists_url
end
