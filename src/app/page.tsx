'use client'
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProductCard } from "./components/ProductCard";
import { BuyCarr } from "./components/BuyCarr";
interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}
export default function Home() {
  const [dataCards, setDataCards] = useState({ products: [], count: 0 })
  const [openCar, setOpenCar] = useState<boolean>(true)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC');
        const data = await response.json();
        setDataCards(data);
        console.log(data);
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <PageContainer>
      <PageContent>
        <div className="cards">
          {dataCards.products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        { openCar && <BuyCarr/>}
      </PageContent>
    </PageContainer>
  );
}
export const PageContainer = styled.main`
  display: flex;
  justify-content: center;
  `
export const PageContent = styled.div`
min-height: calc(100vh - 135px);
max-width: 1200px;
width: 100%;
margin: 0 2rem;


  display: flex;
  .cards{
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

`
