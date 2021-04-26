import { Container} from './styles';
import { Plan } from '../../components/Plan';
import plano1 from '../../assets/amico.svg';
import plano2 from '../../assets/rafiki.svg';
import plano3 from '../../assets/amico2.svg';

export function Plans()  {
  return (
  <Container> 
      <h2>Planos</h2>
        <Plan img={plano1} price={50} coin="2.000" color="#D92B67"/>
        <Plan img={plano2} price={60} coin="5.000" color="#C28619"/>
        <Plan img={plano3} price={90} coin="10.000" color="#2C3B66"/>
  </Container>
  )
  }

