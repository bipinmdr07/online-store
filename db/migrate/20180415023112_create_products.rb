class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.decimal :price, precision: 15, scale: 2
      t.integer :quantity

      t.timestamps
    end
  end
end
