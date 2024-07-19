import { Product } from "@/app/types"
import React from "react"

const Price = ({ product }: { product: Product }) => {
  const discountPrice = (price: number, discount: number): string => {
    const discountPrice = price - (discount * price) / 100
    return discountPrice.toFixed(2)
  }

  return (
    <>
      {product?.discountPercentage ? (
        <div className="text-red-600 text-lg md:text-sm lg:text-lg font-semibold">
          ฿{discountPrice(product.price, product.discountPercentage)}{" "}
          <span className="text-gray-400 md:text-sm font-normal">
            <span className="text-decoration-line: line-through">
              ฿{product.price}
            </span>{" "}
            /ชิ้น
          </span>
        </div>
      ) : (
        <div className="text-lg md:text-sm lg:text-lg font-semibold">
          ฿{product.price}{" "}
          <span className="text-gray-400 md:text-sm font-normal">/ชิ้น</span>
        </div>
      )}
    </>
  )
}

export default Price
