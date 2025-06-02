"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export default function CartPage() {
  const { state, dispatch } = useCart()
  const [couponCode, setCouponCode] = useState("")

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: "REMOVE_ITEM", payload: id })
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: newQuantity } })
    }
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const shippingFee = state.total >= 1000000 ? 0 : 50000
  const finalTotal = state.total + shippingFee

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="h-24 w-24 mx-auto text-gray-400 mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Giỏ hàng trống</h1>
            <p className="text-gray-600 mb-8">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link href="/products">Tiếp tục mua sắm</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Giỏ hàng của bạn</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-amber-600 font-bold">{item.price}₫</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center">{item.quantity || 1}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Tóm tắt đơn hàng</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Tạm tính ({state.itemCount} sản phẩm):</span>
                  <span>{state.total.toLocaleString()}₫</span>
                </div>
                <div className="flex justify-between">
                  <span>Phí vận chuyển:</span>
                  <span>{shippingFee === 0 ? "Miễn phí" : `${shippingFee.toLocaleString()}₫`}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Tổng cộng:</span>
                  <span className="text-amber-600">{finalTotal.toLocaleString()}₫</span>
                </div>

                <div className="space-y-2">
                  <Input placeholder="Mã giảm giá" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                  <Button variant="outline" className="w-full">
                    Áp dụng mã giảm giá
                  </Button>
                </div>

                <Button asChild size="lg" className="w-full bg-amber-600 hover:bg-amber-700">
                  <Link href="/checkout">Tiến hành thanh toán</Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="/products">Tiếp tục mua sắm</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
