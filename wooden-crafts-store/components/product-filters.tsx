"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 10000000])

  const categories = ["Tượng gỗ", "Đồ nội thất", "Đồ dùng nhà bếp", "Quà tặng", "Đồ trang trí"]

  const materials = ["Gỗ hương", "Gỗ sưa", "Gỗ mun", "Gỗ cẩm lai", "Gỗ trắc"]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Danh Mục</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <label
                htmlFor={category}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Khoảng Giá</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider value={priceRange} onValueChange={setPriceRange} max={10000000} step={100000} className="w-full" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{priceRange[0].toLocaleString()}₫</span>
              <span>{priceRange[1].toLocaleString()}₫</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Chất Liệu</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {materials.map((material) => (
            <div key={material} className="flex items-center space-x-2">
              <Checkbox id={material} />
              <label
                htmlFor={material}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {material}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button className="w-full">Áp Dụng Bộ Lọc</Button>
    </div>
  )
}
