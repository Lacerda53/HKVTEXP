import { useHistory } from "react-router";
import { Checkbox } from "../../components/Checkbox";
import { Container, Footer } from "./styles";

export function Segment() {
  const history = useHistory();
  return (
    <Container>
      <h2>Segmento de negócio</h2>
      <p>Qual o tipo de segmento de seu negócio?</p>
      <ul>
        <li>
          Alimentício
          <Checkbox />
        </li>
        <li>
          Artesanato
          <Checkbox />
        </li>
        <li>
          Finanças e Administração
          <Checkbox />
        </li>
        <li>
          Medicina ou Saúde
          <Checkbox />
        </li>
        <li>
          TI e Programação
          <Checkbox />
        </li>
        <li>
          Outros
          <Checkbox />
        </li>
      </ul>
      <Footer>
        <button onClick={()=>history.push('/about')}>PRÓXIMO</button>
      </Footer>
    </Container>
  );
}
