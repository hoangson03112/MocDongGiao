import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded bg-amber-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">🪵</span>
              </div>
              <span className="font-bold text-xl">Gỗ Nghệ Thuật</span>
            </div>
            <p className="text-gray-400 mb-4">
              Chuyên chế tác và kinh doanh đồ thủ công mỹ nghệ bằng gỗ cao cấp. Mang đến cho khách hàng những sản phẩm
              tinh xảo và độc đáo.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Danh Mục</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/tuong-go" className="text-gray-400 hover:text-white transition-colors">
                  Tượng gỗ
                </Link>
              </li>
              <li>
                <Link href="/category/noi-that" className="text-gray-400 hover:text-white transition-colors">
                  Đồ nội thất
                </Link>
              </li>
              <li>
                <Link href="/category/nha-bep" className="text-gray-400 hover:text-white transition-colors">
                  Đồ dùng nhà bếp
                </Link>
              </li>
              <li>
                <Link href="/category/qua-tang" className="text-gray-400 hover:text-white transition-colors">
                  Quà tặng
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liên Hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-gray-400">123 Đường ABC, Quận 1, TP.HCM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-gray-400">0123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-gray-400">info@gonghethuat.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Gỗ Nghệ Thuật. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
