"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { User, Package, Heart, Settings, Eye } from "lucide-react"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile")

  const orders = [
    {
      id: "DH001",
      date: "2024-01-15",
      status: "Đã giao",
      total: "2,500,000",
      items: 2,
    },
    {
      id: "DH002",
      date: "2024-01-10",
      status: "Đang giao",
      total: "1,200,000",
      items: 1,
    },
    {
      id: "DH003",
      date: "2024-01-05",
      status: "Đã hủy",
      total: "800,000",
      items: 1,
    },
  ]

  const wishlistItems = [
    {
      id: 1,
      name: "Tượng Phật Quan Âm",
      price: "2,500,000",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Bàn Trà Gỗ Hương",
      price: "8,500,000",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Tài khoản của tôi</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Hồ sơ</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>Đơn hàng</span>
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>Yêu thích</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Cài đặt</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Thông tin cá nhân</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Họ</Label>
                    <Input id="firstName" defaultValue="Nguyễn" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Tên</Label>
                    <Input id="lastName" defaultValue="Văn A" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="nguyenvana@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input id="phone" defaultValue="0123 456 789" />
                </div>
                <div>
                  <Label htmlFor="address">Địa chỉ</Label>
                  <Input id="address" defaultValue="123 Đường ABC, Quận 1, TP.HCM" />
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700">Cập nhật thông tin</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Lịch sử đơn hàng</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">Đơn hàng #{order.id}</h3>
                          <p className="text-sm text-gray-600">Ngày đặt: {order.date}</p>
                        </div>
                        <Badge
                          variant={
                            order.status === "Đã giao"
                              ? "default"
                              : order.status === "Đang giao"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {order.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-600">{order.items} sản phẩm</p>
                          <p className="font-semibold text-amber-600">{order.total}₫</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Xem chi tiết
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wishlist" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Sản phẩm yêu thích</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 flex items-center space-x-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-amber-600 font-bold">{item.price}₫</p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                          Thêm vào giỏ
                        </Button>
                        <Button variant="outline" size="sm">
                          Xóa
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Đổi mật khẩu</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Mật khẩu hiện tại</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">Mật khẩu mới</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Xác nhận mật khẩu mới</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button className="bg-amber-600 hover:bg-amber-700">Đổi mật khẩu</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cài đặt thông báo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Nhận email về đơn hàng</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Nhận email về khuyến mãi</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Nhận SMS thông báo</span>
                    <input type="checkbox" className="rounded" />
                  </div>
                  <Button className="bg-amber-600 hover:bg-amber-700">Lưu cài đặt</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
