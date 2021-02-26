Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :languages do
  #   :questions
  # end

  root 'languages#index'
  get '/languages', to: 'languages#index'
  get '/languages/:id', to: 'languages#show', as: :language

  ## THESE TWO ARE FOR MY FORMS
  # /languages/${id}/questions/new`
  get '/languages/:language_id/questions/new', to: "questions#new"

  # `/languages/${id}/questions/${q.id}/edit`
  get '/languages/:language_id/questions/:id/edit', to: "questions#edit"

  # THESE TWO: actually change DB
  post '/languages/:language_id/questions', to: "questions#create"
  patch '/languages/:language_id/questions/:id', to: "questions#update"

  #custom route
  get '/allQuestions', to: 'languages#all_questions'
  get '/x', to: 'languages#x'
end
