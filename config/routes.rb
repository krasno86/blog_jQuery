Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'articles/home'
  root 'articles#home'

  resources :articles
  resources :coments


end
