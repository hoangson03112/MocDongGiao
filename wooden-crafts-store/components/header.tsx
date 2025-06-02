"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/contexts/cart-context"
import SearchModal from "@/components/search-modal"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { state } = useCart()

  const navigation = [
    { name: "Trang chủ", href: "/" },
    { name: "Sản phẩm", href: "/products" },
    { name: "Danh mục", href: "/categories" },
    { name: "Về chúng tôi", href: "/about" },
    { name: "Liên hệ", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-amber-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">🪵</span>
            </div>
            <span className="font-bold text-xl text-amber-800">Mộc Đồng Giao</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-amber-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <Button
                variant="outline"
                className="w-64 justify-start text-gray-500"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-4 w-4 mr-2" />
                Tìm kiếm sản phẩm...
              </Button>
            </div>

            <Button variant="outline" size="sm" className="relative" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-4 w-4" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-amber-600 text-xs text-white flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium transition-colors hover:text-amber-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}
