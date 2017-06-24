Rails.application.routes.draw do
  resources :chickens, only: [:edit, :update, :index]

  root to: "static_pages#home"
  
  namespace :api do 
    resources :batches, only: [:index, :create, :show, :update]
    resources :chickens, only: [:index, :create, :update]
  end
end
