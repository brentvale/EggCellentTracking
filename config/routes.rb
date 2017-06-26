Rails.application.routes.draw do

  devise_for :users
  root to: "static_pages#home"
  
  namespace :api do 
    get '/batches/chicken_silhouette', to: 'batches#chicken_silhouette'
    resources :batches, only: [:index, :create, :show, :update]
    
    resources :chickens, only: [:index, :create, :update]
    get '/users/currentUser', to: 'users#current_user_signed_in'
  end
  
end
