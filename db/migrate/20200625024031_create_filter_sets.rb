class CreateFilterSets < ActiveRecord::Migration[6.0]
  def change
    create_table :filter_sets do |t|
      t.references :category, null: false, foreign_key: true, unique: true

      t.timestamps
    end
  end
end
