import { Container, Header, Body } from "./styles";
import welcomeImg from "../../assets/welcome.png";
import { useEffect } from "react";
import { useHistory } from "react-router";

export function Welcome() {
  const history = useHistory();
  useEffect(() => {
    let timer1 = setTimeout(() => history.push("/register"), 3 * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
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
