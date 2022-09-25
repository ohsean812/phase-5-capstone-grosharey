class CreateGroceries < ActiveRecord::Migration[7.0]
  def change
    create_table :groceries do |t|
      t.string :name
      t.integer :price
      t.string :quantity
      t.string :store
      t.date :date
      t.string :owner

      t.timestamps
    end
  end
end
