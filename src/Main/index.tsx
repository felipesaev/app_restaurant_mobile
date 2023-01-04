import {  Container, CategoriesContainer, MenuContainer, FooterContainer } from './styles';

import { Header } from '../components/Header';
import { Categories } from '../components/Categories';

export function Main() {
  return (
    <Container>
      <Header />

      <CategoriesContainer>
        <Categories />
      </CategoriesContainer>

      <MenuContainer></MenuContainer>

      <FooterContainer></FooterContainer>
    </Container>
  );
}
