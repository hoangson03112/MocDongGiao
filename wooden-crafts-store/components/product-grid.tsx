"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Heart, Grid, List } from "lucide-react"

export default function ProductGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const products = [
    {
      id: 1,
      name: "Tượng Phật Quan Âm Ngàn Mắt Ngàn Tay",
      price: "2,500,000",
      originalPrice: "3,000,000",
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.8,
      reviews: 24,
      badge: "Bán chạy",
      description: "Tượng Phật Quan Âm được chế tác từ gỗ hương cao cấp, tỉ mỉ trong từng chi tiết.",
    },
    {
      id: 2,
      name: "Bàn Trà Gỗ Hương Nguyên Khối",
      price: "8,500,000",
      originalPrice: null,
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.9,
      reviews: 18,
      badge: "Mới",
      description: "Bàn trà được làm từ gỗ hương nguyên khối, thiết kế sang trọng và bền đẹp.",
    },
    {
      id: 3,
      name: "Hộp Đựng Trang Sức Khảm Trai",
      price: "450,000",
      originalPrice: "600,000",
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.7,
      reviews: 32,
      badge: "Giảm giá",
      description: "Hộp đựng trang sức được khảm trai tinh xảo, phù hợp làm quà tặng.",
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
      description: "Tượng rồng phong thủy mang ý nghĩa may mắn và thịnh vượng.",
    },
    {
      id: 5,
      name: "Bộ Thớt Gỗ Cao Cấp 3 Món",
      price: "320,000",
      originalPrice: "400,000",
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.8,
      reviews: 45,
      badge: "Bán chạy",
      description: "Bộ thớt gỗ 3 món với các kích cỡ khác nhau, tiện dụng cho nhà bếp.",
    },
    {
      id: 6,
      name: "Kệ Sách Mini Để Bàn",
      price: "650,000",
      originalPrice: null,
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.5,
      reviews: 12,
      badge: null,
      description: "Kệ sách mini thiết kế nhỏ gọn, phù hợp để bàn làm việc.",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-gray-600">Hiển thị {products.length} sản phẩm</p>

        <div className="flex items-center gap-4">
          <Select defaultValue="newest">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sắp xếp theo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Mới nhất</SelectItem>
              <SelectItem value="price-low">Giá thấp đến cao</SelectItem>
              <SelectItem value="price-high">Giá cao đến thấp</SelectItem>
              <SelectItem value="rating">Đánh giá cao nhất</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border rounded-md">
            <Button variant={viewMode === "grid" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("grid")}>
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant={viewMode === "list" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("list")}>
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
        {products.map((product) => (
          <Card
            key={product.id}
            className={`group hover:shadow-lg transition-shadow ${viewMode === "list" ? "flex" : ""}`}
          >
            <CardContent className={`p-0 ${viewMode === "list" ? "flex w-full" : ""}`}>
              <div
                className={`relative overflow-hidden ${viewMode === "list" ? "w-48 flex-shrink-0" : "rounded-t-lg"}`}
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                    viewMode === "list" ? "w-full h-full" : "w-full h-64"
                  }`}
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

              <div className={`p-4 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>

                  {viewMode === "list" && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  )}

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
                </div>

                <div className={`flex items-center ${viewMode === "list" ? "justify-between" : "justify-between"}`}>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-amber-600">{product.price}₫</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}₫</span>
                    )}
                  </div>
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                    Thêm vào giỏ
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
