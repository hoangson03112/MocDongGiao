"use client"

import { useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string

  const categoryMap: { [key: string]: string } = {
    "tuong-go": "Tượng Gỗ",
    "noi-that": "Đồ Nội Thất",
    "nha-bep": "Đồ Dùng Nhà Bếp",
    "qua-tang": "Quà Tặng",
  }

  const categoryName = categoryMap[slug] || "Danh mục"

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Category Hero */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryName}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá bộ sưu tập {categoryName.toLowerCase()} được chế tác thủ công bởi những nghệ nhân tài hoa
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ProductFilters />
          </div>
          <div className="lg:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
