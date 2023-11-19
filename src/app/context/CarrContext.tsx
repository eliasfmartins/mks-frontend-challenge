import React, { createContext, useState, useContext, type ReactNode, type Dispatch, type SetStateAction } from 'react'

interface Product {
  quantidade: number
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string
  updatedAt: string
}
interface CarrinhoContextData {
  openCar: boolean
  setOpenCar: Dispatch<SetStateAction<boolean>>
  itensCar: Product[]
  setItensCar: Dispatch<SetStateAction<Product[]>>
}

const CarrinhoContext = createContext<CarrinhoContextData | undefined>(undefined)

interface CarrinhoProviderProps {
  children: ReactNode
}

export const CarrinhoProvider: React.FC<CarrinhoProviderProps> = ({ children }) => {
  const [openCar, setOpenCar] = useState<boolean>(false)
  const [itensCar, setItensCar] = useState<Product[]>([])

  return (
    <CarrinhoContext.Provider value={{ openCar, setOpenCar, itensCar, setItensCar }}>
      {children}
    </CarrinhoContext.Provider>
  )
}

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext)
  if (context == null) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider')
  }
  return context
}
