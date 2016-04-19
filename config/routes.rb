Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api do
    resources :todos, only: [:index, :show, :create, :destroy, :update]
  end
end
