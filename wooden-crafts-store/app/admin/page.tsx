"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Package,
  Users,
  ShoppingCart,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
} from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    {
      title: "Tổng doanh thu",
      value: "125,500,000₫",
      change: "+12.5%",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      title: "Đơn hàng mới",
      value: "24",
      change: "+8.2%",
      icon: ShoppingCart,
      color: "text-blue-600",
    },
    {
      title: "Sản phẩm",
      value: "156",
      change: "+3",
      icon: Package,
      color: "text-amber-600",
    },
    {
      title: "Khách hàng",
      value: "1,234",
      change: "+15.3%",
      icon: Users,
      color: "text-purple-600",
    },
  ]

  const recentOrders = [
    {
      id: "DH001",
      customer: "Nguyễn Văn A",
      product: "Tượng Phật Quan Âm",
      amount: "2,500,000₫",
      status: "Đang xử lý",
      date: "2024-01-15",
    },
    {
      id: "DH002",
      customer: "Trần Thị B",
      product: "Bàn Trà Gỗ Hương",
      amount: "8,500,000₫",
      status: "Đã xác nhận",
      date: "2024-01-14",
    },
    {
      id: "DH003",
      customer: "Lê Văn C",
      product: "Hộp Đựng Trang Sức",
      amount: "450,000₫",
      status: "Đang giao",
      date: "2024-01-13",
    },
  ]

  const products = [
    {
      id: 1,
      name: "Tượng Phật Quan Âm",
      category: "Tượng gỗ",
      price: "2,500,000₫",
      stock: 15,
      status: "Còn hàng",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Bàn Trà Gỗ Hương",
      category: "Nội thất",
      price: "8,500,000₫",
      stock: 3,
      status: "Sắp hết",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Hộp Đựng Trang Sức",
      category: "Quà tặng",
      price: "450,000₫",
      stock: 0,
      status: "Hết hàng",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <BarChart3 className="h-4 w-4 mr-2" />
                Báo cáo
              </Button>
              <Button className="bg-amber-600 hover:bg-amber-700">
                <Plus className="h-4 w-4 mr-2" />
                Thêm sản phẩm
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Tổng quan</TabsTrigger>
            <TabsTrigger value="products">Sản phẩm</TabsTrigger>
            <TabsTrigger value="orders">Đơn hàng</TabsTrigger>
            <TabsTrigger value="customers">Khách hàng</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className={`text-sm ${stat.color}`}>{stat.change} từ tháng trước</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle>Đơn hàng gần đây</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-semibold">#{order.id}</p>
                          <p className="text-sm text-gray-600">{order.customer}</p>
                          <p className="text-sm text-gray-600">{order.product}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-amber-600">{order.amount}</p>
                          <Badge
                            variant={
                              order.status === "Đã xác nhận"
                                ? "default"
                                : order.status === "Đang giao"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sales Chart Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Biểu đồ doanh thu</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Biểu đồ doanh thu sẽ được hiển thị tại đây</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="products" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Quản lý sản phẩm</CardTitle>
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Thêm sản phẩm
                  </Button>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Tìm kiếm sản phẩm..." className="pl-10" />
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Lọc
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-semibold">{product.name}</h3>
                          <p className="text-sm text-gray-600">{product.category}</p>
                          <p className="text-sm font-medium text-amber-600">{product.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Tồn kho: {product.stock}</p>
                          <Badge
                            variant={
                              product.status === "Còn hàng"
                                ? "default"
                                : product.status === "Sắp hết"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {product.status}
                          </Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Quản lý đơn hàng</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">Đơn hàng #{order.id}</h3>
                        <p className="text-sm text-gray-600">Khách hàng: {order.customer}</p>
                        <p className="text-sm text-gray-600">Sản phẩm: {order.product}</p>
                        <p className="text-sm text-gray-600">Ngày đặt: {order.date}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-semibold text-amber-600">{order.amount}</p>
                          <Badge
                            variant={
                              order.status === "Đã xác nhận"
                                ? "default"
                                : order.status === "Đang giao"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Quản lý khách hàng</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Tính năng quản lý khách hàng sẽ được phát triển</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
