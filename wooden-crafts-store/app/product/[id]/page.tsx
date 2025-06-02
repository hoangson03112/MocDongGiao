"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Star,
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
  Share2,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  ChevronLeft,
  ChevronRight,
  ZoomInIcon as Zoom,
  Eye,
  Award,
  X,
} from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

export default function ProductDetailPage() {
  const params = useParams()
  const { dispatch } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState("default")
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [activeTab, setActiveTab] = useState("description")

  // Mock product data - trong thực tế sẽ fetch từ API
  const product = {
    id: Number.parseInt(params.id as string),
    name: "Tượng Phật Quan Âm Ngàn Mắt Ngàn Tay",
    price: "2,500,000",
    originalPrice: "3,000,000",
    discount: 17,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    rating: 4.8,
    reviews: 124,
    sold: 89,
    badge: "Bán chạy",
    description: `
      <div class="space-y-4">
        <p>Tượng Phật Quan Âm Ngàn Mắt Ngàn Tay được chế tác từ gỗ hương cao cấp, thể hiện sự tỉ mỉ và tài hoa của nghệ nhân. Mỗi chi tiết đều được chạm khắc một cách tinh xảo, mang lại vẻ đẹp trang nghiêm và linh thiêng.</p>
        
        <h3 class="font-semibold text-lg">Đặc điểm nổi bật:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Chế tác từ gỗ hương nguyên khối cao cấp</li>
          <li>Chạm khắc thủ công bởi nghệ nhân lành nghề</li>
          <li>Chi tiết tinh xảo, sắc nét từng đường nét</li>
          <li>Bề mặt được đánh bóng mịn màng, bền đẹp</li>
          <li>Ý nghĩa tâm linh sâu sắc, mang lại bình an</li>
        </ul>
        
        <h3 class="font-semibold text-lg">Ý nghĩa:</h3>
        <p>Tượng Quan Âm Ngàn Mắt Ngàn Tay tượng trưng cho lòng từ bi vô biên, khả năng cứu độ chúng sinh. Đây là biểu tượng của sự bảo vệ, che chở và mang lại may mắn cho gia đình.</p>
      </div>
    `,
    specifications: {
      "Chất liệu": "Gỗ hương nguyên khối",
      "Kích thước": "Cao 45cm x Rộng 25cm x Sâu 20cm",
      "Trọng lượng": "3.5kg",
      "Xuất xứ": "Việt Nam",
      "Bảo hành": "12 tháng",
      "Nghệ nhân": "Thầy Nguyễn Văn Minh",
      "Thời gian chế tác": "15-20 ngày",
    },
    variants: [
      { id: "default", name: "Kích thước tiêu chuẩn", price: "2,500,000", stock: 15 },
      { id: "large", name: "Kích thước lớn (60cm)", price: "3,800,000", stock: 8 },
      { id: "premium", name: "Phiên bản cao cấp", price: "4,200,000", stock: 3 },
    ],
    inStock: true,
    stockQuantity: 15,
    features: [
      {
        icon: Truck,
        title: "Miễn phí vận chuyển",
        description: "Đơn hàng trên 1 triệu",
      },
      {
        icon: Shield,
        title: "Bảo hành 12 tháng",
        description: "Chính hãng 100%",
      },
      {
        icon: RotateCcw,
        title: "Đổi trả 7 ngày",
        description: "Không hài lòng",
      },
    ],
    craftsman: {
      name: "Thầy Nguyễn Văn Minh",
      experience: "25 năm kinh nghiệm",
      avatar: "/placeholder.svg?height=80&width=80",
      bio: "Nghệ nhân ưu tú với hơn 25 năm kinh nghiệm trong nghề chạm khắc gỗ. Đã tạo ra hàng nghìn tác phẩm nghệ thuật được khách hàng yêu thích.",
    },
  }

  const reviews = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      rating: 5,
      comment:
        "Sản phẩm rất đẹp, chất lượng tuyệt vời. Đóng gói cẩn thận, giao hàng nhanh. Tôi rất hài lòng với sản phẩm này.",
      date: "2024-01-15",
      verified: true,
      helpful: 12,
      images: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
    },
    {
      id: 2,
      name: "Trần Thị B",
      rating: 4,
      comment:
        "Tượng rất tinh xảo, giao hàng nhanh. Chỉ có điều hơi nhỏ so với mong đợi nhưng nhìn chung rất hài lòng.",
      date: "2024-01-10",
      verified: true,
      helpful: 8,
      images: [],
    },
    {
      id: 3,
      name: "Lê Văn C",
      rating: 5,
      comment: "Chất lượng xuất sắc! Nghệ nhân chế tác rất tỉ mỉ. Sẽ giới thiệu cho bạn bè.",
      date: "2024-01-08",
      verified: false,
      helpful: 15,
      images: ["/placeholder.svg?height=100&width=100"],
    },
  ]

  const relatedProducts = [
    {
      id: 2,
      name: "Tượng Phật Di Lặc",
      price: "1,800,000",
      originalPrice: "2,200,000",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 56,
    },
    {
      id: 3,
      name: "Tượng Rồng Phong Thủy",
      price: "3,200,000",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 34,
    },
    {
      id: 4,
      name: "Tượng Phật Thích Ca",
      price: "2,800,000",
      originalPrice: "3,500,000",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 78,
    },
    {
      id: 5,
      name: "Tượng Quan Công",
      price: "4,500,000",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 23,
    },
  ]

  const handleAddToCart = () => {
    const selectedVariantData = product.variants.find((v) => v.id === selectedVariant)
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: product.id,
          name: `${product.name} - ${selectedVariantData?.name}`,
          price: selectedVariantData?.price || product.price,
          image: product.images[0],
        },
      })
    }
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const selectedVariantData = product.variants.find((v) => v.id === selectedVariant)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-amber-600">
            Trang chủ
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-amber-600">
            Sản phẩm
          </Link>
          <span className="mx-2">/</span>
          <Link href="/category/tuong-go" className="hover:text-amber-600">
            Tượng gỗ
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      <main className="container mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover cursor-zoom-in"
                onClick={() => setShowImageModal(true)}
              />

              {/* Image Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Zoom Icon */}
              <button
                onClick={() => setShowImageModal(true)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              >
                <Zoom className="h-5 w-5" />
              </button>

              {/* Badges */}
              <div className="absolute top-4 left-4 space-y-2">
                {product.badge && <Badge className="bg-red-500 text-white">{product.badge}</Badge>}
                {product.discount && <Badge className="bg-orange-500 text-white">-{product.discount}%</Badge>}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded border-2 transition-all ${
                    selectedImage === index ? "border-amber-600" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} đánh giá)
                </span>
                <span className="text-gray-600">•</span>
                <span className="text-gray-600">{product.sold} đã bán</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-amber-600">
                  {selectedVariantData?.price.toLocaleString()}₫
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">{product.originalPrice.toLocaleString()}₫</span>
                )}
                {product.discount && <Badge className="bg-red-100 text-red-600">Tiết kiệm {product.discount}%</Badge>}
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                  {product.inStock ? `Còn ${selectedVariantData?.stock} sản phẩm` : "Hết hàng"}
                </span>
                <span className="text-gray-400">•</span>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Eye className="h-4 w-4" />
                  <span>234 lượt xem hôm nay</span>
                </div>
              </div>
            </div>

            {/* Variants */}
            <div className="space-y-3">
              <h3 className="font-semibold">Lựa chọn sản phẩm:</h3>
              <div className="grid grid-cols-1 gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`p-3 border rounded-lg text-left transition-all ${
                      selectedVariant === variant.id
                        ? "border-amber-600 bg-amber-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{variant.name}</p>
                        <p className="text-sm text-gray-600">Còn {variant.stock} sản phẩm</p>
                      </div>
                      <p className="font-semibold text-amber-600">{variant.price.toLocaleString()}₫</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Số lượng:</span>
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity >= (selectedVariantData?.stock || 0)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="flex-1 bg-amber-600 hover:bg-amber-700"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Thêm vào giỏ hàng
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? "text-red-600 border-red-600" : ""}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Button variant="outline" size="lg" className="w-full">
                Mua ngay
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 pt-6 border-t">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <feature.icon className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-medium">{feature.title}</p>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Craftsman Info */}
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={product.craftsman.avatar || "/placeholder.svg"}
                    alt={product.craftsman.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold">{product.craftsman.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        <Award className="h-3 w-3 mr-1" />
                        Nghệ nhân
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{product.craftsman.experience}</p>
                    <p className="text-sm text-gray-700 mt-1">{product.craftsman.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Mô tả chi tiết</TabsTrigger>
              <TabsTrigger value="specifications">Thông số kỹ thuật</TabsTrigger>
              <TabsTrigger value="reviews">Đánh giá ({product.reviews})</TabsTrigger>
              <TabsTrigger value="qa">Hỏi đáp</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-8">
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                        <span className="font-medium text-gray-900">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {/* Review Summary */}
                <Card>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-amber-600 mb-2">{product.rating}</div>
                        <div className="flex justify-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">{product.reviews} đánh giá</p>
                      </div>
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((star) => (
                          <div key={star} className="flex items-center space-x-2">
                            <span className="text-sm w-8">{star} ⭐</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{
                                  width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 3 : 2}%`,
                                }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 w-8">
                              {star === 5 ? 87 : star === 4 ? 25 : star === 3 ? 8 : star === 2 ? 3 : 1}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Individual Reviews */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                              <span className="font-semibold text-amber-600">{review.name.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <h4 className="font-medium text-gray-900">{review.name}</h4>
                                {review.verified && (
                                  <Badge variant="outline" className="text-xs">
                                    <Shield className="h-3 w-3 mr-1" />
                                    Đã mua hàng
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center space-x-2 mt-1">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4">{review.comment}</p>

                        {/* Review Images */}
                        {review.images.length > 0 && (
                          <div className="flex space-x-2 mb-4">
                            {review.images.map((image, index) => (
                              <img
                                key={index}
                                src={image || "/placeholder.svg"}
                                alt={`Review ${index + 1}`}
                                className="w-20 h-20 object-cover rounded border"
                              />
                            ))}
                          </div>
                        )}

                        <div className="flex items-center space-x-4 text-sm">
                          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                            <ThumbsUp className="h-4 w-4" />
                            <span>Hữu ích ({review.helpful})</span>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                            <ThumbsDown className="h-4 w-4" />
                            <span>Không hữu ích</span>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                            <MessageCircle className="h-4 w-4" />
                            <span>Trả lời</span>
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Write Review */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Viết đánh giá của bạn</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Đánh giá của bạn</label>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <button key={i}>
                              <Star className="h-6 w-6 text-gray-300 hover:text-yellow-400" />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Tiêu đề</label>
                        <Input placeholder="Tóm tắt đánh giá của bạn" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Nội dung đánh giá</label>
                        <Textarea placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm này..." rows={4} />
                      </div>
                      <Button className="bg-amber-600 hover:bg-amber-700">Gửi đánh giá</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="qa" className="mt-6">
              <Card>
                <CardContent className="p-8">
                  <div className="text-center py-8">
                    <MessageCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Hỏi đáp về sản phẩm</h3>
                    <p className="text-gray-600 mb-6">Có thắc mắc về sản phẩm? Hãy đặt câu hỏi để được hỗ trợ</p>
                    <Button className="bg-amber-600 hover:bg-amber-700">Đặt câu hỏi</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Sản phẩm liên quan</h2>
            <Button variant="outline" asChild>
              <Link href="/products">Xem tất cả</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(relatedProduct.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({relatedProduct.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-amber-600">
                          {relatedProduct.price.toLocaleString()}₫
                        </span>
                        {relatedProduct.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {relatedProduct.originalPrice.toLocaleString()}₫
                          </span>
                        )}
                      </div>
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                        Xem
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
