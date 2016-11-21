class WatchList < ApplicationRecord
  belongs_to :user
  belongs_to :watcher, class_name: 'User', foreign_key: 'watcher_id'
end
