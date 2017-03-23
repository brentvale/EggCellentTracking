class Api::ChickensController < ApplicationController
  def index
    chickens = Chicken.where(departure_date: "n/a")
    chicken_photo_urls = {}
    chickens.each do |chicken|
      chicken_photo_urls[chicken.id] = chicken.photo.url
    end
    render json: {chickens: chickens, photo_urls: chicken_photo_urls}
  end
  
  def create
    
  end
  
  private 
  
  def chicken_params
    params.require(:chicken).permit(:chicken_name,
                                    :biography,
                                    :arrival_date,
                                    :departure_date)
  end

end