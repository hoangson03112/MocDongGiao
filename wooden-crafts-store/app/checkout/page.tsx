"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/contexts/cart-context"

export default function CheckoutPage() {
  const { state } = useCart()
  const [paymentMethod, setPaymentMethod] = useState("cod")

  const shippingFee = state.total >= 1000000 ? 0 : 50000
  const finalTotal = state.total + shippingFee

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Thanh toán</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle>Thông tin giao hàng</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Họ</Label>
                    <Input id="firstName" placeholder="Nhập họ" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Tên</Label>
                    <Input id="lastName" placeholder="Nhập tên" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input id="phone" placeholder="0123 456 789" />
                </div>
                <div>
                  <Label htmlFor="address">Địa chỉ</Label>
                  <Input id="address" placeholder="Số nhà, tên đường" />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">Tỉnh/Thành phố</Label>
                    <Input id="city" placeholder="TP.HCM" />
                  </div>
                  <div>
                    <Label htmlFor="district">Quận/Huyện</Label>
                    <Input id="district" placeholder="Quận 1" />
                  </div>
                  <div>
                    <Label htmlFor="ward">Phường/Xã</Label>
                    <Input id="ward" placeholder="Phường Bến Nghé" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="notes">Ghi chú</Label>
                  <Textarea id="notes" placeholder="Ghi chú cho đơn hàng (tùy chọn)" />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Phương thức thanh toán</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod">Thanh toán khi nhận hàng (COD)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank">Chuyển khoản ngân hàng</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="momo" id="momo" />
                    <Label htmlFor="momo">Ví MoMo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="vnpay" id="vnpay" />
                    <Label htmlFor="vnpay">VNPay</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Đơn hàng của bạn</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Order Items */}
                <div className="space-y-3">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-sm text-gray-600">Số lượng: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-medium">
                        {(Number.parseInt(item.price.replace(/,/g, "")) * (item.quantity || 1)).toLocaleString()}₫
                      </span>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Order Total */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Tạm tính:</span>
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
                </div>

                <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700">
                  Đặt hàng
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  Bằng cách đặt hàng, bạn đồng ý với{" "}
                  <a href="#" className="text-amber-600 hover:underline">
                    Điều khoản dịch vụ
                  </a>{" "}
                  và{" "}
                  <a href="#" className="text-amber-600 hover:underline">
                    Chính sách bảo mật
                  </a>{" "}
                  của chúng tôi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
