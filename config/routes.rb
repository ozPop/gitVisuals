Rails.application.routes.draw do
  resources :watch_lists
  resources :followings
  resources :follows
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks'}
  root 'welcome#index'
  post 'users/add_watch', to: "users#add_watch"
  post 'users/delete_watch', to: "users#delete_watch"
  resources :users, only: [:show,:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
