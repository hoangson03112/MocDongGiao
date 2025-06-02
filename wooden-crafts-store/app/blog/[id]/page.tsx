"use client"

import { CardHeader } from "@/components/ui/card"

import { useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, User, Eye, Share2, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function BlogDetailPage() {
  const params = useParams()

  // Mock blog post data
  const post = {
    id: Number.parseInt(params.id as string),
    title: "Cách bảo quản đồ gỗ mỹ nghệ đúng cách",
    content: `
      <p>Đồ gỗ mỹ nghệ là những tác phẩm nghệ thuật quý giá, được chế tác từ những loại gỗ cao cấp và tỉ mỉ trong từng chi tiết. Để giữ được vẻ đẹp và độ bền của những sản phẩm này, việc bảo quản đúng cách là vô cùng quan trọng.</p>

      <h2>1. Vệ sinh định kỳ</h2>
      <p>Việc vệ sinh định kỳ giúp loại bỏ bụi bẩn và giữ cho bề mặt gỗ luôn sáng bóng. Bạn nên:</p>
      <ul>
        <li>Dùng khăn mềm, khô để lau bụi hàng ngày</li>
        <li>Sử dụng khăn ẩm nhẹ để lau sạch vết bẩn</li>
        <li>Tránh dùng hóa chất mạnh có thể làm hỏng bề mặt gỗ</li>
      </ul>

      <h2>2. Kiểm soát độ ẩm</h2>
      <p>Gỗ rất nhạy cảm với độ ẩm. Độ ẩm quá cao có thể làm gỗ bị nấm mốc, trong khi độ ẩm quá thấp có thể làm gỗ bị nứt nẻ.</p>

      <h2>3. Tránh ánh nắng trực tiếp</h2>
      <p>Ánh nắng mặt trời trực tiếp có thể làm phai màu và làm khô gỗ. Hãy đặt đồ gỗ ở nơi thoáng mát, tránh ánh nắng trực tiếp.</p>

      <h2>4. Sử dụng dầu dưỡng gỗ</h2>
      <p>Định kỳ 3-6 tháng, bạn nên sử dụng dầu dưỡng gỗ chuyên dụng để giữ cho gỗ luôn mềm mại và bóng đẹp.</p>
    `,
    excerpt: "Hướng dẫn chi tiết cách bảo quản và chăm sóc các sản phẩm gỗ mỹ nghệ để giữ được vẻ đẹp lâu dài.",
    image: "/placeholder.svg?height=400&width=800",
    category: "Hướng dẫn",
    author: "Nguyễn Văn A",
    date: "2024-01-15",
    views: 1250,
    readTime: "5 phút đọc",
  }

  const relatedPosts = [
    {
      id: 2,
      title: "Nghệ thuật chạm khắc gỗ truyền thống Việt Nam",
      image: "/placeholder.svg?height=200&width=300",
      category: "Nghệ thuật",
    },
    {
      id: 3,
      title: "Top 10 loại gỗ quý hiếm được ưa chuộng nhất",
      image: "/placeholder.svg?height=200&width=300",
      category: "Kiến thức",
    },
    {
      id: 4,
      title: "Ý nghĩa phong thủy của các tượng gỗ",
      image: "/placeholder.svg?height=200&width=300",
      category: "Phong thủy",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-amber-600">
                Trang chủ
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-amber-600">
                Blog
              </Link>
              <span>/</span>
              <span className="text-gray-900">{post.title}</span>
            </div>
          </nav>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-amber-600">{post.category}</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>{post.views} lượt xem</span>
                </div>
                <span>{post.readTime}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Yêu thích
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Chia sẻ
                </Button>
              </div>
            </div>

            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

                  <Separator className="my-8" />

                  {/* Tags */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">bảo quản gỗ</Badge>
                      <Badge variant="outline">mỹ nghệ</Badge>
                      <Badge variant="outline">hướng dẫn</Badge>
                      <Badge variant="outline">chăm sóc</Badge>
                    </div>
                  </div>

                  {/* Share */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button variant="outline" size="sm">
                        <Heart className="h-4 w-4 mr-2" />
                        125 Yêu thích
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-2" />8 Bình luận
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Chia sẻ
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <Card className="mt-8">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Bình luận (8)</h3>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <MessageCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Tính năng bình luận sẽ được phát triển</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt={post.author}
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h3 className="font-semibold text-lg">{post.author}</h3>
                    <p className="text-gray-600 text-sm mb-4">Chuyên gia về đồ gỗ mỹ nghệ</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Xem thêm bài viết
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Bài viết liên quan</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                      <div className="flex space-x-3 hover:bg-gray-50 p-2 rounded transition-colors">
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <Badge variant="outline" className="text-xs mb-1">
                            {relatedPost.category}
                          </Badge>
                          <h4 className="font-medium text-sm line-clamp-2">{relatedPost.title}</h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Đăng ký nhận tin</h3>
                  <p className="text-sm text-gray-600 mb-4">Nhận những bài viết mới nhất về đồ gỗ mỹ nghệ</p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Email của bạn"
                      className="w-full px-3 py-2 border rounded-md text-sm"
                    />
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">Đăng ký</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
