import React from "react"
import { Product } from "@/app/types"

function Title({ product }: { product: Product }) {
  return (
    <div className="md:text-xs lg:text-lg md:font-medium">
      {product.title} ขนาด {product.dimensions.depth} x{" "}
      {product.dimensions.width} x {product.dimensions.height} cm
    </div>
  )
}

export default Title
