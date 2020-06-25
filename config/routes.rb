Rails.application.routes.draw do
  post '/signup', to: 'signups#create'
  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'
  get '/user', to: 'sessions#show'
  get '/openings', to: 'openings#index'
  root 'pages#index'
end
