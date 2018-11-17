class DevelopersController < ApplicationController
  skip_before_action :verify_authenticity_token

  # get index (all)
  def index
    render json: Developer.all
  end

  # get one (by id)
  def show
    render json: Developer.find(params["id"])
  end

  # create just the developer
  def create
    render json: Developer.create(params["developer"])
  end

  def delete
    render json: Developer.delete(params["id"])
  end

  def update
    render json: Developer.update(params["id"], params["developer"])
  end

end
