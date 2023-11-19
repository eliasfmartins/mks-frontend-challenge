import React from "react";

interface CartItemProps {
	item: {
		id: number
		name: string
		brand: string
		photo: string
		price: string
		quantidade: number
	}
	onRemove: (id: number) => void
	onIncrease: (id: number) => void
	onDecrease: (id: number) => void
}

export const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onDecrease, onIncrease }) => {
	const totalPrice = parseFloat(item.price) * item.quantidade;
	return (
		<div className='item' key={item.id}>
			<button className='x' onClick={() => { onRemove(item.id); }}>X</button>
			<img src={item.photo} alt={item.name} />
			<div className='flex'>

				<p>
					{item.name} <br />
					{item.brand}
				</p>
				<div className='quantidade'>
					Qtd:
					<div className='qtd'>
						<button onClick={() => { onDecrease(item.id); }}>-</button>
						<div className='quantidadeprodutos'>{item.quantidade}</div>
						<button onClick={() => { onIncrease(item.id); }}>+</button>
					</div>
				</div>
			</div>
			<div className="price">
				R${totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
			</div>
		</div>
	);
};
