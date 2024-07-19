import { Product } from "@/app/types"
import Star from "@/icons/Star"
import React from "react"

const Rating = ({ product }: { product: Product }) => {
  const rating = Math.ceil(product.rating)

  const ratingLeft = 5 - rating

  return (
    <div className="flex flex-row my-3">
      {[...Array(rating)].map((e, i) => {
        return (
          <div key={i}>
            <Star color="OrangeRed" />
          </div>
        )
      })}
      {ratingLeft > 0 &&
        [...Array(ratingLeft)].map((e, i) => {
          return (
            <div key={i}>
              <Star color="gainsboro" />
            </div>
          )
        })}
    </div>
  )
}

export default Rating
