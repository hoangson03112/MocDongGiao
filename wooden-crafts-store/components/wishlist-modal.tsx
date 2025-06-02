"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingCart, X } from "lucide-react"
import Link from "next/link"

interface WishlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WishlistModal({ isOpen, onClose }: WishlistModalProps) {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Tượng Phật Quan Âm",
      price: "2,500,000₫",
      image: "/placeholder.svg?height=100&width=100",
      inStock: true,
    },
    {
      id: 2,
      name: "Bàn Trà Gỗ Hương",
      price: "8,500,000₫",
      image: "/placeholder.svg?height=100&width=100",
      inStock: true,
    },
    {
      id: 3,
      name: "Hộp Đựng Trang Sức",
      price: "450,000₫",
      image: "/placeholder.svg?height=100&width=100",
      inStock: false,
    },
  ])

  const removeFromWishlist = (id: number) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-red-500" />
            <span>Danh sách yêu thích ({wishlistItems.length})</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-8">
              <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Danh sách yêu thích trống</p>
              <Button onClick={onClose} className="mt-4 bg-amber-600 hover:bg-amber-700">
                Tiếp tục mua sắm
              </Button>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-amber-600 font-bold">{item.price}</p>
                      <p className={`text-sm ${item.inStock ? "text-green-600" : "text-red-600"}`}>
                        {item.inStock ? "Còn hàng" : "Hết hàng"}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700" disabled={!item.inStock}>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Thêm vào giỏ
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => removeFromWishlist(item.id)}>
                        <X className="h-4 w-4 mr-2" />
                        Xóa
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Đóng
          </Button>
          <div className="space-x-2">
            <Button variant="outline" asChild>
              <Link href="/products">Tiếp tục mua sắm</Link>
            </Button>
            <Button className="bg-amber-600 hover:bg-amber-700" asChild>
              <Link href="/cart">Xem giỏ hàng</Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
