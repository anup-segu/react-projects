class Api::TodosController < ApplicationController
  def index
    @todos = Todo.all

    render json: @todos
  end

  def create
    @todo = Todo.new(todo_params)

    if @todo.save!
      render json: @todo
    else
      render json: {errors: @todo.errors.full_messages}, status: 302
    end
  end

  def update
    @todo = Todo.find_by(params[:id])
    puts params
    if @todo.update_attributes(todo_params)
      render json: @todo
    else
      render json: {errors: @todo.errors.full_messages}, status: 302
    end
  end

  def destroy
    @todo = Todo.find_by(params[:id])
    @todo.destroy!
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
