Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home_page#index'

  # this is the routes configuration for api call
  namespace :api, defaults: { format: :json} do
    namespace :v1 do
      resources :products, only: [:create, :destroy]
    end
  end

  # this routes are for configuration of views
  resources :products, only: [:new]
end
