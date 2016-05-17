class Todo < ActiveRecord::Base
  validates :title, :body, presence: true
  validates :done, inclusion: { in: [true, false] }

  has_many :todo_steps
end
