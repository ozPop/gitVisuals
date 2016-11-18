class FollowSerializer < ActiveModel::Serializer
  attributes :id, :login, :avatar_url, :html_url, :user_id
end
