class WelcomeController < ApplicationController
  def index
    # binding.pry
    if current_user
      redirect_to user_path(current_user)
    else
      redirect_to new_user_session_path
    end
  end

end
