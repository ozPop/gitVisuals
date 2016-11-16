class CreateGithubUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :github_users do |t|
      t.string :username
      t.integer :github_id
      t.string :avatar_url
      t.string :github_profile
      t.integer :public_repos
      t.integer :public_gists
      t.integer :followers
      t.integer :following
      t.datetime :github_created_at
      t.datetime :github_updated_at
      t.string :starred_url
      t.string :gists_url

      t.timestamps
    end
  end
end
