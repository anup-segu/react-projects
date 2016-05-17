class CreateTodoSteps < ActiveRecord::Migration
  def change
    create_table :todo_steps do |t|
      t.integer :todo_id, null: false
      t.string :content, null: false

      t.timestamps null: false
    end
    add_index :todo_steps, :todo_id
  end
end
