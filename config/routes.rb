Rails.application.routes.draw do
  resources :comments, only: [:index, :show, :create]
  resources :groceries, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:create]

  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  get '/me', to: "users#get_logged_in"
  delete '/logout', to: "sessions#destroy"



  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
