import {
  Container,
  CategoriesContainer,
  MenuContainer,
  FooterContainer,
  Footer,
} from './styles';

import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Button } from '../components/Button';

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer></MenuContainer>
      </Container>
      <Footer>
        <FooterContainer>
          <Button onPress={() => alert('teste')}>Novo Pedido</Button>
        </FooterContainer>
      </Footer>
    </>
  );
}
