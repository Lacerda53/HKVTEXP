import { Container, Header } from "./styles";

export function Welcome() {
  return (
    <Container>
      <Header>
        <h1>Bem vindo ao <span>Nome</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus senectus pharetra, lectus molestie nulla ut mauris, porta egestas.</p>
      </Header>
    </Container>
  );
}
