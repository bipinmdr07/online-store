# Product controller class
class Api::V1::ProductsController < ApplicationController

  def create
  	@product = Product.new(product_params)
    if @product.save
      render json: @product, status: :created, location: [:api, :v1, :products]
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  private

  def product_params
  	params.fetch(:product, {}).permit(:name, :description, :price, :quantity)
  end
end
