import { Container, Header, Body } from "./styles";
import welcomeImg from "../../assets/welcome.png";

export function Welcome() {
  return (
    <Container>
      <Header>
        <div>
          <h1>
            Bem vindo à <span>Impacta!</span>
          </h1>
          <p>
            A plataforma que conecta empreendedoras para uma experiência de rede
            de economia sustentável.
          </p>
        </div>
      </Header>
      <Body>
        <img src={welcomeImg} alt="welcome" />
      </Body>
    </Container>
  );
}
