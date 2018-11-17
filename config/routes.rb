Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/developers', to: 'developers#index'
  get '/developers/:id', to: 'developers#show'
  post '/developers', to: 'developers#create'
  delete '/developers/:id', to: 'developers#delete'
  put '/developers/:id', to: 'developers#update'

end
