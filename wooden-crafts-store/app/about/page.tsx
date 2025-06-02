import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    { year: "2004", event: "Thành lập công ty với 5 nghệ nhân" },
    { year: "2008", event: "Mở rộng xưởng sản xuất đầu tiên" },
    { year: "2012", event: "Ra mắt showroom tại TP.HCM" },
    { year: "2016", event: "Xuất khẩu sản phẩm ra thị trường quốc tế" },
    { year: "2020", event: "Phát triển nền tảng bán hàng online" },
    { year: "2024", event: "Đạt 50+ nghệ nhân và 1000+ sản phẩm" },
  ]

  const team = [
    {
      name: "Nguyễn Văn Minh",
      position: "Giám đốc điều hành",
      experience: "25 năm kinh nghiệm",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Trần Thị Hoa",
      position: "Trưởng phòng thiết kế",
      experience: "20 năm kinh nghiệm",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Lê Văn Tùng",
      position: "Nghệ nhân trưởng",
      experience: "30 năm kinh nghiệm",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Phạm Thị Lan",
      position: "Quản lý chất lượng",
      experience: "15 năm kinh nghiệm",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const values = [
    {
      icon: Award,
      title: "Chất lượng",
      description: "Cam kết mang đến những sản phẩm chất lượng cao nhất",
    },
    {
      icon: Users,
      title: "Truyền thống",
      description: "Bảo tồn và phát huy nghề thủ công truyền thống",
    },
    {
      icon: Target,
      title: "Sáng tạo",
      description: "Không ngừng đổi mới và sáng tạo trong thiết kế",
    },
    {
      icon: Heart,
      title: "Tận tâm",
      description: "Phục vụ khách hàng với tất cả tâm huyết và nhiệt tình",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Về <span className="text-amber-600">Gỗ Nghệ Thuật</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Hơn 20 năm kinh nghiệm trong nghề chế tác đồ thủ công mỹ nghệ bằng gỗ, chúng tôi tự hào là đơn vị hàng
                đầu mang đến những tác phẩm nghệ thuật tinh xảo và độc đáo.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Câu chuyện của chúng tôi</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Gỗ Nghệ Thuật được thành lập vào năm 2004 bởi nghệ nhân Nguyễn Văn Minh với mong muốn bảo tồn và
                    phát huy nghề thủ công truyền thống của Việt Nam. Bắt đầu từ một xưởng nhỏ với 5 nghệ nhân, chúng
                    tôi đã không ngừng phát triển và mở rộng.
                  </p>
                  <p>
                    Qua hơn 20 năm hoạt động, chúng tôi đã tạo ra hàng nghìn tác phẩm nghệ thuật, phục vụ khách hàng
                    trong nước và quốc tế. Mỗi sản phẩm đều mang trong mình câu chuyện riêng và tâm huyết của những nghệ
                    nhân tài hoa.
                  </p>
                  <p>
                    Ngày nay, Gỗ Nghệ Thuật đã trở thành một thương hiệu uy tín với đội ngũ hơn 50 nghệ nhân và showroom
                    tại các thành phố lớn. Chúng tôi tiếp tục cam kết mang đến những sản phẩm chất lượng cao nhất cho
                    khách hàng.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Xưởng chế tác"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold">1000+</div>
                    <div className="text-sm">Sản phẩm đã tạo ra</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hành trình phát triển</h2>
              <p className="text-lg text-gray-600">Những cột mốc quan trọng trong quá trình phát triển của chúng tôi</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-600"></div>
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`flex items-center ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                      <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                        <Card>
                          <CardContent className="p-4">
                            <Badge className="mb-2 bg-amber-600">{milestone.year}</Badge>
                            <p className="text-gray-700">{milestone.event}</p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="relative z-10 w-4 h-4 bg-amber-600 rounded-full border-4 border-white"></div>
                      <div className="w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h2>
              <p className="text-lg text-gray-600">Những giá trị định hướng mọi hoạt động của chúng tôi</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Đội ngũ lãnh đạo</h2>
              <p className="text-lg text-gray-600">Những người dẫn dắt và định hướng phát triển công ty</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-amber-600 font-medium mb-2">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-amber-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Khám phá bộ sưu tập của chúng tôi</h2>
            <p className="text-xl mb-8 opacity-90">
              Hãy để chúng tôi mang đến cho bạn những tác phẩm nghệ thuật độc đáo và tinh xảo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Xem sản phẩm
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors"
              >
                Liên hệ tư vấn
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
