Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :static_pages, only: [:root]

  namespace :api, defaults: {format: :json} do
    resources :bench, only: [:index, :create, :show]
  end
end
