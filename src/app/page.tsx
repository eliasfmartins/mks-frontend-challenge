'use client'
import styled from "styled-components";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/globalstyles";

export default function Home() {
  return (
    <PageContainer>
      teste
    </PageContainer>
  );
}
export const PageContainer = styled.main`
  min-height: calc(100vh - 135px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`
