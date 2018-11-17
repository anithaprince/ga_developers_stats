class DeveloperController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
        render json: { message: 'hi', status: 200 }
  end

end
