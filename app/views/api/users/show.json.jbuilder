if current_user
  json.partial('user', user: current_user)
else
  flash.now[:errors]
end
