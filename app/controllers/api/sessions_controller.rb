class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:email],
      params[:password]
    )

    if @user
      login!(@user)
      redirect_to api_user_url(current_user)
    else
      flash[:errors] = ["Invalid credentials"]
      redirect_to api_user_url(current_user)
    end
  end

  def destroy
    logout!
  end
end
