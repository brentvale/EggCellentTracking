class Api::BatchesController < ApplicationController
  
  def create 
    batch = Batch.new(batch_params)
    if batch.save
      render json: { batch: batch }
    else
      render json: batch.errors.full_messages, status: 422
    end
  end
  
  def show
    batch = Batch.find(params[:id])
    render json: { batch: batch,
                   photo_url: batch.batch_photo.url}
  end
  
  def update
    batch = Batch.find(params[:id])
    
    if batch.update_attributes(batch_params)
      render json: { batch: batch,
                     photo_url: batch.batch_photo.url}
    else
      render json: batch.errors.full_messages, status: 422
    end
  end
  
  private
  
  def batch_params
    params.require(:batch).permit(:batch_photo, :egg_coordinates)
  end
end
