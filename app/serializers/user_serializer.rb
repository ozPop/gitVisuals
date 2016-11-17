class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :repos_url, :public_repos
end
