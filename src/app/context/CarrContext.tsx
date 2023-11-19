import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface Product {
  quantidade: number;
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}
// Definindo o formato do contexto
interface CarrinhoContextData {
  openCar: boolean;
  setOpenCar: Dispatch<SetStateAction<boolean>>;
  itensCar: Product[];
  setItensCar: Dispatch<SetStateAction<Product[]>>;
}

// Criando o contexto
const CarrinhoContext = createContext<CarrinhoContextData | undefined>(undefined);

// Provedor do contexto, pode ser um componente separado
interface CarrinhoProviderProps {
  children: ReactNode;
}

export const CarrinhoProvider: React.FC<CarrinhoProviderProps> = ({ children }) => {
  const [openCar, setOpenCar] = useState<boolean>(false);
  const [itensCar, setItensCar] = useState<Product[]>([]);

  return (
    <CarrinhoContext.Provider value={{ openCar, setOpenCar, itensCar, setItensCar }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

// Hook customizado para facilitar o acesso ao contexto
export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider');
  }
  return context;
};
