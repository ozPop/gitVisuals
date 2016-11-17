class UsersController < ApplicationController
  before_action :set_user, only: [:show]

  def show
    if current_user == @user
      render 'show'
    else
      redirect_to user_path(current_user)
    end
  end

  private

  def set_user
    @user = User.find_by(id: params[:id])
  end

end
