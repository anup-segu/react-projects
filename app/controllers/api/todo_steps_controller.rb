class Api::TodoStepsController < ApplicationController
  def index
    @todo_steps = TodoStep.all

    render json: @todo_steps
  end

  def create
    @todo_step = TodoStep.new(step_params)

    if @todo_step.save!
      render json: @todo_step
    else
      render json: {errors: @todo_step.errors.full_messages}, status: 302
    end
  end

  def update
    @todo_step = TodoStep.find_by(params[:id])

    if @todo_step.update_attributes(step_params)
      render json: @todo_step
    else
      render json: {errors: @todo_step.errors.full_messages}, status: 302
    end
  end

  def destroy
    @todo_step = Todo.find_by(params[:id])
    @todo_step.destroy!
  end

  private
  def step_params
    params.require(:todo_step).permit(:content, :done)
  end

end
