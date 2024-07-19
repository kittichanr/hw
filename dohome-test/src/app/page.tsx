import Image from "next/image"
import { RootProduct } from "./types"
import Heart from "@/icons/Heart"
import Title from "@/components/Title"
import Price from "@/components/Price"
import Star from "@/icons/Star"
import Rating from "@/components/Rating"

async function getData(): Promise<RootProduct> {
  const res = await fetch("https://dummyjson.com/products")

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()

  return (
    <div className="md:grid md:grid-cols-4 md:gap-4 p-4 h-auto">
      {data.products.map((product, index) => {
        return (
          <div key={index} className="border-2 px-2 py-3 mb-4">
            <div className="flex justify-center">
              <Image
                width="250"
                height="100"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>
            <div className="px-3 py-2 max-h-11">
              <Title product={product} />
              <Rating product={product} />
              <Price product={product} />
            </div>
            <div className="relative h-44 w-32">
              <div className="absolute bottom-0 left-2 h-12 w-6 md:h-8 md:w-8">
                <Heart />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
