class UsersController < ApplicationController
  before_action :set_user, only: [:show]

  def index
    @users = User.all
  end

  def show
    if user_signed_in? && current_user == @user
      respond_to do |format|
        format.html { render 'show' }
        format.json { render json: current_user }
      end
    else
      redirect_to root_path
    end
  end

  def add_watch
    current_user.watching << User.find_by(id: params[:user][:user_id])
    current_user.save
    redirect_to users_path
  end

  def delete_watch
    current_user.watching.destroy(User.find_by(id: params[:user][:user_id]))
    current_user.save
    redirect_to users_path
  end

  private

  def set_user
    @user = User.find_by(id: params[:id])
  end

end
