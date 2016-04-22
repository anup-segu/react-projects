class Api::BenchController < ApplicationController
  def index
    @benches = Bench.all
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save!
      redirect_to api_bench_index_url
    else
      flash[:errors] = @bench.errors.full_messages
      render :index
    end
  end

  private
  def bench_params
    params.require(:bench).permit(:description,:lat,:lng)
  end
end
