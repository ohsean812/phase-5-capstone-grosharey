Rails.application.routes.draw do
  
  resources :comments, only: [:index, :show, :create]
  resources :groceries, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create]
  
  resources :grocery_comments, only: [:show]

  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  get '/me', to: "users#get_logged_in"
  delete '/logout', to: "sessions#destroy"
  # get '/latest', to: "groceries#latest"
  get '/images', to: "groceries#groceries_images"
  get '/images/:id', to: "groceries#grocery_image"



  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
