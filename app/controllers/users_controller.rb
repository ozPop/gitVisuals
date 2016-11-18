class UsersController < ApplicationController
  before_action :set_user, only: [:show]

  def show
    if current_user == @user
      binding.pry
      respond_to do |format|
        format.html { render 'show' }
        format.json { render json: current_user }
      end
    else
      redirect_to user_path(current_user)
    end
  end

  private

  def set_user
    @user = User.find_by(id: params[:id])
  end

end
