import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Đồ Thủ Công
              <span className="text-amber-600 block">Mỹ Nghệ Gỗ</span>
              Cao Cấp
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Khám phá bộ sưu tập đồ thủ công mỹ nghệ bằng gỗ được chế tác thủ công bởi những nghệ nhân tài hoa. Mỗi sản
              phẩm đều mang trong mình câu chuyện và tâm huyết của người làm ra nó.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link href="/products">Xem Sản Phẩm</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Tìm Hiểu Thêm</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Đồ thủ công mỹ nghệ bằng gỗ"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">100% Thủ Công</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
