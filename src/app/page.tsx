'use client'
import React, { useEffect, useState } from 'react'
import { ProductCard } from './components/ProductCard'
import { BuyCarr } from './components/BuyCarr'
import { useCarrinho } from './context/CarrContext'
import { PageContainer, PageContent } from './styles/PageStyle';

interface Product {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string
  updatedAt: string
  quantidade: number
}
export default function Home() {
  const [dataCards, setDataCards] = useState({ products: [], count: 0 })
  const { openCar } = useCarrinho()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC')
        const data = await response.json()
        setDataCards(data)
      } catch (error) {
        console.error('Erro ao obter dados:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <PageContainer>
      <PageContent>
        <div className="cards">
          {dataCards.products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {openCar && <BuyCarr />}
      </PageContent>
    </PageContainer>
  )
}
