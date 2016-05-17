class Api::BenchController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
  end

  def show
    @bench = Bench.find(params[:id]);
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save!
      redirect_to api_bench_url(@bench)
    else
      flash[:errors] = @bench.errors.full_messages
      render :show
    end
  end

  private
  def bench_params
    params.require(:bench).permit(:description,:lat,:lng, :bounds, :seating)
  end
end
