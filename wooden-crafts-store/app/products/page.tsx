import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tất Cả Sản Phẩm</h1>
          <p className="text-gray-600">Khám phá bộ sưu tập đồ thủ công mỹ nghệ bằng gỗ của chúng tôi</p>
        </div>

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
