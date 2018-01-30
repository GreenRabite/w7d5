class Api::SessionsController < ApplicationController

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: "No current user to logout", status: 404
    end
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render 'api/users/show', status: 200
    else
      render json: "Invalid credentials", status: 401
    end
  end

end
