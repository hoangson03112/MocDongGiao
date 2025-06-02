import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Eye } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Cách bảo quản đồ gỗ mỹ nghệ đúng cách",
      excerpt: "Hướng dẫn chi tiết cách bảo quản và chăm sóc các sản phẩm gỗ mỹ nghệ để giữ được vẻ đẹp lâu dài.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Hướng dẫn",
      author: "Nguyễn Văn A",
      date: "2024-01-15",
      views: 1250,
    },
    {
      id: 2,
      title: "Nghệ thuật chạm khắc gỗ truyền thống Việt Nam",
      excerpt: "Tìm hiểu về lịch sử và kỹ thuật chạm khắc gỗ truyền thống của các nghệ nhân Việt Nam.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Nghệ thuật",
      author: "Trần Thị B",
      date: "2024-01-12",
      views: 980,
    },
    {
      id: 3,
      title: "Top 10 loại gỗ quý hiếm được ưa chuộng nhất",
      excerpt: "Danh sách các loại gỗ quý hiếm được sử dụng nhiều trong chế tác đồ mỹ nghệ cao cấp.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Kiến thức",
      author: "Lê Văn C",
      date: "2024-01-10",
      views: 1500,
    },
    {
      id: 4,
      title: "Ý nghĩa phong thủy của các tượng gỗ",
      excerpt: "Tìm hiểu ý nghĩa phong thủy và cách bài trí các tượng gỗ trong nhà để mang lại may mắn.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Phong thủy",
      author: "Phạm Thị D",
      date: "2024-01-08",
      views: 2100,
    },
    {
      id: 5,
      title: "Quy trình chế tác một tác phẩm gỗ mỹ nghệ",
      excerpt: "Khám phá quy trình chi tiết từ khâu chọn gỗ đến hoàn thiện một tác phẩm mỹ nghệ.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Quy trình",
      author: "Hoàng Văn E",
      date: "2024-01-05",
      views: 850,
    },
    {
      id: 6,
      title: "Xu hướng thiết kế nội thất gỗ hiện đại",
      excerpt: "Cập nhật những xu hướng thiết kế nội thất bằng gỗ được ưa chuộng trong năm 2024.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Thiết kế",
      author: "Vũ Thị F",
      date: "2024-01-03",
      views: 1350,
    },
  ]

  const categories = ["Tất cả", "Hướng dẫn", "Nghệ thuật", "Kiến thức", "Phong thủy", "Quy trình", "Thiết kế"]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Tin tức</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá thế giới đồ gỗ mỹ nghệ qua những bài viết hữu ích và thú vị
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "Tất cả" ? "default" : "outline"}
              className="cursor-pointer hover:bg-amber-600 hover:text-white"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <img
              src={posts[0].image || "/placeholder.svg"}
              alt={posts[0].title}
              className="w-full h-64 md:h-full object-cover"
            />
            <CardContent className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-4 bg-amber-600">{posts[0].category}</Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{posts[0].title}</h2>
              <p className="text-gray-600 mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{posts[0].author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{posts[0].date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{posts[0].views} lượt xem</span>
                </div>
              </div>
              <Link href={`/blog/${posts[0].id}`} className="text-amber-600 font-medium hover:underline">
                Đọc tiếp →
              </Link>
            </CardContent>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <Badge className="mb-3 bg-amber-600">{post.category}</Badge>
                <h3 className="font-bold text-lg mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Link href={`/blog/${post.id}`} className="text-amber-600 font-medium hover:underline text-sm">
                    Đọc tiếp →
                  </Link>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Eye className="h-3 w-3" />
                    <span>{post.views}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
