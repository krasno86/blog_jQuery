class ApplicationController < ActionController::Base
  protect_from_forgery prepend: true

  def after_sign_in_path_for(resource)
    articles_path
  end

  def after_sign_out_path_for(resource_or_scope)
    #request.referrer
    articles_path
  end

  # protected
  #
  # def configure_permitted_parameters
  #   devise_parameter_sanitizer.for(:sign_up)  { |u| u.permit(  :email,:password, :password_confirmation ) }
  # end

end
