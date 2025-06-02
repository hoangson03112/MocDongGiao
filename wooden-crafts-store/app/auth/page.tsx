"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Eye, EyeOff, Facebook, Mail } from "lucide-react"

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Đăng nhập</TabsTrigger>
              <TabsTrigger value="register">Đăng ký</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Đăng nhập tài khoản</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="example@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="password">Mật khẩu</Label>
                    <div className="relative">
                      <Input id="password" type={showPassword ? "text" : "password"} placeholder="Nhập mật khẩu" />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <a href="#" className="text-sm text-amber-600 hover:underline">
                      Quên mật khẩu?
                    </a>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Đăng nhập</Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Hoặc</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button variant="outline">
                      <Mail className="h-4 w-4 mr-2" />
                      Google
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Tạo tài khoản mới</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
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
                    <Label htmlFor="password">Mật khẩu</Label>
                    <div className="relative">
                      <Input id="password" type={showPassword ? "text" : "password"} placeholder="Nhập mật khẩu" />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Nhập lại mật khẩu"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Đăng ký</Button>

                  <p className="text-sm text-center text-gray-600">
                    Bằng cách đăng ký, bạn đồng ý với{" "}
                    <a href="#" className="text-amber-600 hover:underline">
                      Điều khoản dịch vụ
                    </a>{" "}
                    và{" "}
                    <a href="#" className="text-amber-600 hover:underline">
                      Chính sách bảo mật
                    </a>
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
