class TodoStep < ActiveRecord::Base
  validates :content, :todo_id, presence: true

  validates :done, inclusion: { in: [true, false] }

  belongs_to :todo
end
