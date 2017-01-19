class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def after_sign_in_path_for(resource)
    current_user_path
  end

  def after_sign_out_path_for(resource_or_scope)
    request.referrer
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up)  { |u| u.permit(  :email,:password, :password_confirmation , roles: [] ) }
  end

end
