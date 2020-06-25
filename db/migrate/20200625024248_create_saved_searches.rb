class CreateSavedSearches < ActiveRecord::Migration[6.0]
  def change
    create_table :saved_searches do |t|
      t.references :user, null: false, foreign_key: true
      t.references :filter_set, null: false, foreign_key: true
      t.string :name
      t.string :frequency
      t.datetime :last_sent_at

      t.timestamps
    end
    add_index :saved_searches, [:user_id, :filter_set_id], unique: true
  end
end
