import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Categories() {
  const categories = [
    {
      name: "Tượng Gỗ",
      description: "Tượng gỗ nghệ thuật, tượng phong thủy",
      image: "/placeholder.svg?height=300&width=300",
      count: "25+ sản phẩm",
    },
    {
      name: "Đồ Nội Thất",
      description: "Bàn ghế, tủ kệ, đồ trang trí",
      image: "/placeholder.svg?height=300&width=300",
      count: "40+ sản phẩm",
    },
    {
      name: "Đồ Dùng Nhà Bếp",
      description: "Thớt, muỗng gỗ, hộp đựng",
      image: "/placeholder.svg?height=300&width=300",
      count: "30+ sản phẩm",
    },
    {
      name: "Quà Tặng",
      description: "Đồ lưu niệm, quà tặng độc đáo",
      image: "/placeholder.svg?height=300&width=300",
      count: "20+ sản phẩm",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Danh Mục Sản Phẩm</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá các danh mục sản phẩm đa dạng của chúng tôi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.name.toLowerCase()}`}>
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                      {category.count}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
