class ChickensController < ApplicationController
  def index
    @chickens = Chicken.all
  end
  
  def edit
    @chicken = Chicken.find(params[:id])
  end

  def update
    @chicken = Chicken.find(params[:id])
    
    if @chicken.update_attributes(chicken_params)
      redirect_to chickens_url
    else
      flash[:errors] = @chicken.errors.full_messages
      render :edit
    end
  end
  
  private 
  
  def chicken_params
    params.require(:chicken).permit(:photo)
  end

end
