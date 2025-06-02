"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const recentSearches = ["Tượng Phật", "Bàn trà gỗ", "Hộp đựng trang sức", "Thớt gỗ"]

  const trendingSearches = ["Tượng rồng", "Gỗ hương", "Đồ nội thất", "Quà tặng"]

  const searchResults = [
    {
      id: 1,
      name: "Tượng Phật Quan Âm",
      price: "2,500,000₫",
      image: "/placeholder.svg?height=60&width=60",
      category: "Tượng gỗ",
    },
    {
      id: 2,
      name: "Bàn Trà Gỗ Hương",
      price: "8,500,000₫",
      image: "/placeholder.svg?height=60&width=60",
      category: "Nội thất",
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Tìm kiếm sản phẩm</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Tìm kiếm sản phẩm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="space-y-3 max-h-60 overflow-y-auto">
              <h3 className="font-semibold text-sm text-gray-700">Kết quả tìm kiếm</h3>
              {searchResults.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={onClose}
                  className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{product.name}</h4>
                    <p className="text-xs text-gray-600">{product.category}</p>
                    <p className="text-sm font-semibold text-amber-600">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Recent Searches */}
          {!searchQuery && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <h3 className="font-semibold text-sm text-gray-700">Tìm kiếm gần đây</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="cursor-pointer hover:bg-amber-50"
                    onClick={() => setSearchQuery(search)}
                  >
                    {search}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Trending Searches */}
          {!searchQuery && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-gray-400" />
                <h3 className="font-semibold text-sm text-gray-700">Tìm kiếm phổ biến</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((search, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="cursor-pointer hover:bg-amber-50"
                    onClick={() => setSearchQuery(search)}
                  >
                    {search}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="flex space-x-2 pt-4 border-t">
            <Button variant="outline" size="sm" onClick={onClose}>
              Hủy
            </Button>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
              Tìm kiếm nâng cao
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
