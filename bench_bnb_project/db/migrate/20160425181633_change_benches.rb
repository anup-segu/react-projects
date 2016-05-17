class ChangeBenches < ActiveRecord::Migration
  def change
    add_column :benches, :seating, :integer, default: 0
  end
end
