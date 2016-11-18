Rails.application.routes.draw do
  resources :followings
  resources :follows
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks'}
  root 'welcome#index'
  resources :users, only: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
