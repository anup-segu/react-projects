Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api do
    resources :todos, only: [:index, :show, :create, :destroy, :update] do
      resources :todo_steps, only: [:index, :create]
    end
    resources :todo_steps, only: [:update, :destroy]
  end

end
