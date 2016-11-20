class UsersController < ApplicationController
  before_action :set_user, only: [:show]

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

  private

  def set_user
    @user = User.find_by(id: params[:id])
  end

end
