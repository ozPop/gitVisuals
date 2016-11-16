class AddGithubFieldsToUsers < ActiveRecord::Migration[5.0]
  def change
      add_column :users, :avatar_url, :string
      add_column :users, :github_profile, :string
      add_column :users, :starred_url, :string
      add_column :users, :gists_url, :string
      add_column :users, :public_repos, :integer
      add_column :users, :public_gists, :integer
      add_column :users, :followers, :integer
      add_column :users, :following, :integer
      add_column :users, :github_created_at, :datetime
      add_column :users, :github_updated_at, :datetime


  end
end
