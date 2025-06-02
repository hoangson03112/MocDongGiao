"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, CheckCircle, Clock, MapPin, Phone } from "lucide-react"

export default function OrderTrackingPage() {
  const [orderCode, setOrderCode] = useState("")
  const [orderData, setOrderData] = useState(null)

  const mockOrderData = {
    id: "DH001",
    status: "Đang giao",
    orderDate: "2024-01-15",
    estimatedDelivery: "2024-01-18",
    customer: {
      name: "Nguyễn Văn A",
      phone: "0123 456 789",
      address: "123 Đường ABC, Phường Bến Nghé, Quận 1, TP.HCM",
    },
    items: [
      {
        id: 1,
        name: "Tượng Phật Quan Âm",
        quantity: 1,
        price: "2,500,000₫",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    timeline: [
      {
        status: "Đã đặt hàng",
        date: "2024-01-15 09:30",
        description: "Đơn hàng đã được đặt thành công",
        completed: true,
      },
      {
        status: "Đã xác nhận",
        date: "2024-01-15 14:20",
        description: "Đơn hàng đã được xác nhận và chuẩn bị",
        completed: true,
      },
      {
        status: "Đang giao",
        date: "2024-01-16 08:00",
        description: "Đơn hàng đang được vận chuyển",
        completed: true,
      },
      {
        status: "Đã giao",
        date: "",
        description: "Đơn hàng sẽ được giao trong 1-2 ngày tới",
        completed: false,
      },
    ],
    shipping: {
      carrier: "Giao hàng nhanh",
      trackingCode: "GHN123456789",
      currentLocation: "Kho phân loại Quận 1",
    },
  }

  const handleTrackOrder = () => {
    if (orderCode.trim()) {
      setOrderData(mockOrderData as any)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Theo dõi đơn hàng</h1>
            <p className="text-gray-600">Nhập mã đơn hàng để theo dõi tình trạng giao hàng</p>
          </div>

          {/* Order Tracking Form */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex space-x-4">
                <Input
                  placeholder="Nhập mã đơn hàng (VD: DH001)"
                  value={orderCode}
                  onChange={(e) => setOrderCode(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleTrackOrder} className="bg-amber-600 hover:bg-amber-700">
                  Theo dõi
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Order Details */}
          {orderData && (
            <div className="space-y-6">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Đơn hàng #{(orderData as any).id}</CardTitle>
                      <p className="text-gray-600">Đặt ngày: {(orderData as any).orderDate}</p>
                    </div>
                    <Badge
                      variant={(orderData as any).status === "Đã giao" ? "default" : "secondary"}
                      className="text-sm"
                    >
                      {(orderData as any).status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Thông tin giao hàng</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span>{(orderData as any).customer.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span>{(orderData as any).customer.phone}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Thông tin vận chuyển</h3>
                      <div className="space-y-2 text-sm">
                        <p>Đơn vị: {(orderData as any).shipping.carrier}</p>
                        <p>Mã vận đơn: {(orderData as any).shipping.trackingCode}</p>
                        <p>Vị trí hiện tại: {(orderData as any).shipping.currentLocation}</p>
                        <p>Dự kiến giao: {(orderData as any).estimatedDelivery}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Order Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Lịch trình đơn hàng</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {(orderData as any).timeline.map((step: any, index: number) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed ? "bg-green-100" : "bg-gray-100"
                          }`}
                        >
                          {step.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <Clock className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold ${step.completed ? "text-gray-900" : "text-gray-500"}`}>
                            {step.status}
                          </h4>
                          <p className="text-sm text-gray-600">{step.description}</p>
                          {step.date && <p className="text-xs text-gray-500 mt-1">{step.date}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Order Items */}
              <Card>
                <CardHeader>
                  <CardTitle>Sản phẩm trong đơn hàng</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {(orderData as any).items.map((item: any) => (
                      <div key={item.id} className="flex items-center space-x-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-gray-600">Số lượng: {item.quantity}</p>
                        </div>
                        <p className="font-semibold text-amber-600">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Cần hỗ trợ?</h3>
                    <p className="text-gray-600 mb-4">
                      Liên hệ với chúng tôi nếu bạn có bất kỳ thắc mắc nào về đơn hàng
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Button variant="outline">
                        <Phone className="h-4 w-4 mr-2" />
                        Gọi hotline
                      </Button>
                      <Button variant="outline">
                        <Package className="h-4 w-4 mr-2" />
                        Chat hỗ trợ
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
