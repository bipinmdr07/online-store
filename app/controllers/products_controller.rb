# Product controller class
class ProductsController < ApplicationController
  def new
    @product = Product.new
  end

  def create
  	@product = Product.new(product_params)
  	respond_to do |format|
  		if @product.save
  			format.html {redirect_to root_path }
  		else
  			format.html {render :new}
  		end
  	end
  end

  private

  def product_params
  	params.require(:product).permit(:name, :description, :price, :quantity)
  end
end
