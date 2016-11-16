class GithubUsersController < ApplicationController
  def index
    @github_users = GithubUser.all
    respond_to do |format|
      format.html { @github_users }
      format.json { render :json, @github_users }
    end
  end

  def create
  end

  def update
  end
end
