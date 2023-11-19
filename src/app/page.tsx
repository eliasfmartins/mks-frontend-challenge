"use client";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { BuyCarr } from "./components/BuyCarr";
import { useCarrinho } from "./context/CarrContext";
import { PageContainer, PageContent } from "./styles/PageStyle";

type Product = {
	id: number;
	name: string;
	brand: string;
	description: string;
	photo: string;
	price: string;
	createdAt: string;
	updatedAt: string;
	quantidade: number;
};

export default function Home() {
	const [dataCards, setDataCards] = useState({ products: [], count: 0 });
	const { openCar, setOpenCar, openCarClose, itensCar, setItensCar } = useCarrinho();
	const [valorTotal, setValorTotal] = useState<number>(0);
	const [quantidadeItens, setQuantidadeItens] = useState<number>(0);

	const calcularTotal = () => {
		let total = 0;
		let quantidade = 0;

		itensCar.forEach(item => {
			total += parseFloat(item.price) * item.quantidade;
			quantidade += item.quantidade;
		});

		setValorTotal(total);
		setQuantidadeItens(quantidade);
	};

	useEffect(() => {
		console.log("Antes de carregar do localStorage");

		const loadLocalStorageData = () => {

			const storedItensCar = JSON.parse(localStorage.getItem("itensCar") || "[]");
			if (storedItensCar.length != 0) {
				setItensCar(storedItensCar);
			}

			calcularTotal();
		};

		loadLocalStorageData();
	}, []);

	useEffect(() => {
		localStorage.setItem("itensCar", JSON.stringify(itensCar));
		console.log("teste");
		console.log(localStorage);
		calcularTotal();
	}, [itensCar]);

	useEffect(() => {
		if (openCarClose) {
			const timeoutId = setTimeout(() => {
				setOpenCar(false);
			}, 600);

			return () => {
				clearTimeout(timeoutId);
			};
		}
	}, [openCarClose]);

	useEffect(() => {
		const handleScrollLock = () => {
			if (openCar && window.innerWidth <= 600) {
				document.documentElement.style.overflow = "hidden";
			} else {
				document.documentElement.style.overflow = "";
			}
		};

		handleScrollLock();

		window.addEventListener("resize", handleScrollLock);

		return () => {
			window.removeEventListener("resize", handleScrollLock);
		};
	}, [openCar]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC");
				const data = await response.json();
				setDataCards(data);
			} catch (error) {
				console.error("Erro ao obter dados:", error);
			}
		};

		fetchData();
	}, []);
	return (
		<PageContainer>
			<PageContent>
				<div className='cards'>
					{dataCards.products.map((product: Product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
				{openCar && <BuyCarr valorTotal={valorTotal} setValorTotal={setValorTotal} quantidadeItens={quantidadeItens} setQuantidadeItens={setQuantidadeItens}
				/>}
			</PageContent>
		</PageContainer>
	);
}
