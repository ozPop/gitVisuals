class AddReposUrlToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :repos_url, :string
  end
end
