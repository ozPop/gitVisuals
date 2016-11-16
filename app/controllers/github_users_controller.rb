class GithubUsersController < ApplicationController
  def index
    @github_users = GithubUser.all
    respond_to do |format|
      format.html { @github_users }
      format.json { render json: @github_users, adapter: :json }
    end
  end

  def show
    @github_user = GithubUser.find_by(id: params[:id])
  end

  def create
  end

  def update
  end
end
