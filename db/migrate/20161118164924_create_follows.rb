class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :followers do |t|
      t.string :login
      t.string :avatar_url
      t.string :html_url
      t.integer :user_id

      t.timestamps
    end
  end
end
