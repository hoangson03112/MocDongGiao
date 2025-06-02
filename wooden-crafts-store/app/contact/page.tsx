import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Liên hệ với chúng tôi</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ với chúng tôi qua các thông tin dưới đây.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Gửi tin nhắn cho chúng tôi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Họ và tên</Label>
                  <Input id="name" placeholder="Nhập họ và tên" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@email.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input id="phone" placeholder="0123 456 789" />
              </div>
              <div>
                <Label htmlFor="subject">Chủ đề</Label>
                <Input id="subject" placeholder="Chủ đề tin nhắn" />
              </div>
              <div>
                <Label htmlFor="message">Tin nhắn</Label>
                <Textarea id="message" placeholder="Nội dung tin nhắn..." rows={6} />
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Gửi tin nhắn</Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Thông tin liên hệ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Địa chỉ</h3>
                    <p className="text-gray-600">
                      123 Đường ABC, Phường Bến Nghé
                      <br />
                      Quận 1, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Điện thoại</h3>
                    <p className="text-gray-600">
                      Hotline: 0123 456 789
                      <br />
                      Zalo: 0987 654 321
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@gonghethuat.com
                      <br />
                      support@gonghethuat.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Giờ làm việc</h3>
                    <p className="text-gray-600">
                      Thứ 2 - Thứ 6: 8:00 - 17:30
                      <br />
                      Thứ 7: 8:00 - 12:00
                      <br />
                      Chủ nhật: Nghỉ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle>Bản đồ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Google Maps sẽ được tích hợp tại đây</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
