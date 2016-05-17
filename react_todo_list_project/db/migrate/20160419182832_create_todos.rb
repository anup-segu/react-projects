class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.boolean :done, default: false

      t.timestamps null: false
    end

    add_index :todos, :title
  end
end
