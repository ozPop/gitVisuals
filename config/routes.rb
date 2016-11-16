Rails.application.routes.draw do
  root 'welcome#index'
  # get 'github_users', to: 'github_users#index'
  # post 'github_users', to: 'github_users#create'
  resources :github_users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
