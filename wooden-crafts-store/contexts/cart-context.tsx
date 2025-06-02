"use client"

import type React from "react"

import { createContext, useContext, useReducer, type ReactNode } from "react"

interface Product {
  id: number
  name: string
  price: string
  image: string
  quantity?: number
}

interface CartState {
  items: Product[]
  total: number
  itemCount: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
        )
        return {
          ...state,
          items: updatedItems,
          itemCount: state.itemCount + 1,
          total: state.total + Number.parseInt(action.payload.price.replace(/,/g, "")),
        }
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          itemCount: state.itemCount + 1,
          total: state.total + Number.parseInt(action.payload.price.replace(/,/g, "")),
        }
      }
    }
    case "REMOVE_ITEM": {
      const item = state.items.find((item) => item.id === action.payload)
      if (!item) return state

      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        itemCount: state.itemCount - (item.quantity || 1),
        total: state.total - Number.parseInt(item.price.replace(/,/g, "")) * (item.quantity || 1),
      }
    }
    case "UPDATE_QUANTITY": {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (!item) return state

      const quantityDiff = action.payload.quantity - (item.quantity || 1)
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item,
      )

      return {
        ...state,
        items: updatedItems,
        itemCount: state.itemCount + quantityDiff,
        total: state.total + Number.parseInt(item.price.replace(/,/g, "")) * quantityDiff,
      }
    }
    case "CLEAR_CART":
      return { items: [], total: 0, itemCount: 0 }
    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  })

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
