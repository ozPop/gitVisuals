class AddFollowersUrlToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :followers_url, :string
  end
end
