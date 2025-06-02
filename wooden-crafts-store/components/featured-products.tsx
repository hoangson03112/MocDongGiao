"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Heart } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"

export default function FeaturedProducts() {
  const { dispatch } = useCart()

  const products = [
    {
      id: 1,
      name: "Tượng Phật Quan Âm",
      price: "2,500,000",
      originalPrice: "3,000,000",
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.8,
      reviews: 24,
      badge: "Bán chạy",
    },
    {
      id: 2,
      name: "Bàn Trà Gỗ Hương",
      price: "8,500,000",
      originalPrice: null,
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.9,
      reviews: 18,
      badge: "Mới",
    },
    {
      id: 3,
      name: "Hộp Đựng Trang Sức",
      price: "450,000",
      originalPrice: "600,000",
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.7,
      reviews: 32,
      badge: "Giảm giá",
    },
    {
      id: 4,
      name: "Tượng Rồng Phong Thủy",
      price: "1,800,000",
      originalPrice: null,
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.6,
      reviews: 15,
      badge: null,
    },
    {
      id: 5,
      name: "Bộ Thớt Gỗ Cao Cấp",
      price: "320,000",
      originalPrice: "400,000",
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.8,
      reviews: 45,
      badge: "Bán chạy",
    },
    {
      id: 6,
      name: "Kệ Sách Mini",
      price: "650,000",
      originalPrice: null,
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.5,
      reviews: 12,
      badge: null,
    },
  ]

  const handleAddToCart = (product: any) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    })
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Sản Phẩm Nổi Bật</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Những sản phẩm được yêu thích nhất từ bộ sưu tập của chúng tôi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div
                      className={`absolute top-4 left-4 px-2 py-1 rounded text-xs font-medium text-white ${
                        product.badge === "Bán chạy"
                          ? "bg-red-500"
                          : product.badge === "Mới"
                            ? "bg-green-500"
                            : product.badge === "Giảm giá"
                              ? "bg-orange-500"
                              : "bg-blue-500"
                      }`}
                    >
                      {product.badge}
                    </div>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} đánh giá)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-amber-600">{product.price}₫</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}₫</span>
                      )}
                    </div>
                    <Button
                      size="sm"
                      className="bg-amber-600 hover:bg-amber-700"
                      onClick={() => handleAddToCart(product)}
                    >
                      Thêm vào giỏ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/products">Xem Tất Cả Sản Phẩm</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
