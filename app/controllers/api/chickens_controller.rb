class Api::ChickensController < ApplicationController
  def index
    @chickens = Chicken.where(departure_date: "n/a")
    render :index
  end
  
  def create
    @chicken = Chicken.new(chicken_params)
    if @chicken.save
      render :show
    else
      render json: {message: "Unable to Create chicken server side"}
    end
  end
  
  def update
    @chicken = Chicken.find(params[:id])
    if @chicken.update_attributes(chicken_params)
      render :show
    else
      render json: {message: "Unable to Create chicken server side"}
    end
  end
  
  private 
  
  def chicken_params
    params.require(:chicken).permit(:chicken_name,
                                    :biography,
                                    :arrival_date,
                                    :departure_date,
                                    :photo)
  end

end