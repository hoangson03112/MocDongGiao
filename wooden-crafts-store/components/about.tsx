import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Truck, Shield } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Award,
      title: "Chất Lượng Cao",
      description: "Sản phẩm được chế tác từ gỗ tự nhiên cao cấp",
    },
    {
      icon: Users,
      title: "Nghệ Nhân Tài Hoa",
      description: "Đội ngũ nghệ nhân có nhiều năm kinh nghiệm",
    },
    {
      icon: Truck,
      title: "Giao Hàng Toàn Quốc",
      description: "Miễn phí giao hàng cho đơn hàng trên 1 triệu",
    },
    {
      icon: Shield,
      title: "Bảo Hành Uy Tín",
      description: "Bảo hành 12 tháng cho tất cả sản phẩm",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Về Gỗ Nghệ Thuật</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Với hơn 20 năm kinh nghiệm trong nghề, chúng tôi tự hào là một trong những đơn vị hàng đầu trong lĩnh vực
              chế tác đồ thủ công mỹ nghệ bằng gỗ tại Việt Nam.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Mỗi sản phẩm của chúng tôi đều được chế tác thủ công bởi những nghệ nhân tài hoa, mang trong mình tâm
              huyết và sự tỉ mỉ trong từng chi tiết.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=500"
              alt="Xưởng chế tác"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <Card className="absolute -bottom-6 -left-6 bg-white">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">20+</div>
                  <div className="text-sm text-gray-600">Năm Kinh Nghiệm</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
