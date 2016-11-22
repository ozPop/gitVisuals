class WatchListSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :watcher_id
end
