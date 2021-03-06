class Api::BatchesController < ApplicationController
  before_action :authenticate_user!, only: [:create,:update]
  def create 
    @batch = Batch.new(batch_params)
    if @batch.save
      render :show
    else
      render json: @batch.errors.full_messages, status: 422
    end
  end
  
  def show
    @batch = Batch.find(params[:id])
    render :show
  end
  
  def update
    @batch = Batch.find(params[:id])
    
    if @batch.update_attributes(batch_params)
      render :show
    else
      render json: @batch.errors.full_messages, status: 422
    end
  end
  
  def chicken_silhouette
    render json: {image: ActionController::Base.helpers.asset_path('chicken_silhouette.png')}
  end
  
  private
  
  def batch_params
    params.require(:batch).permit(:batch_photo, :egg_coordinates)
  end
end
