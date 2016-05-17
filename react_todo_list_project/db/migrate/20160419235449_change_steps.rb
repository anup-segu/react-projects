class ChangeSteps < ActiveRecord::Migration
  def change
    add_column :todo_steps, :done, :boolean, default: false
  end
end
