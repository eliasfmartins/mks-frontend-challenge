'use client'
import React, { use, useEffect, useState } from 'react'
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
  const { openCar, setOpenCar, openCarClose, setOpenCarClose } = useCarrinho()



  useEffect(() => {
    if (openCarClose===true) {
      // Aguarde a conclusão da animação de saída antes de desmontar o componente
      const timeoutId = setTimeout(() => {
        setOpenCar(false);
        



      }, 600); // Duração da animação em milissegundos

      return () => clearTimeout(timeoutId);
    }
  }, [openCarClose]);
 
  useEffect(() => {
    // Adiciona ou remove a classe no elemento html/body com base nas condições
    const handleScrollLock = () => {
      if (openCar && window.innerWidth <= 600) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = ''; // Remova a propriedade overflow se openCar não estiver ativo ou se a largura da tela for maior que 600 pixels
      }
    };

    // Chama a função inicialmente para garantir que o estado inicial seja configurado corretamente
    handleScrollLock();

    // Adiciona o listener do evento resize
    window.addEventListener('resize', handleScrollLock);

    // Remove o listener do evento resize ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleScrollLock);
    };
  }, [openCar]);
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
