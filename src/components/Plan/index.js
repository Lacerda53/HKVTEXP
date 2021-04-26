import { Container, Body } from './styles';
import { BiCoinStack } from "react-icons/bi";

export function Plan({ img, color, price, coin }) {
  return (<Container color={color} >

    <img src={img} alt="" />
    <div>
      <div>
        <BiCoinStack size="2rem" style={{ marginRight: ".5rem" }} color="#fff" />
        <div>
          <span>{coin}</span>
          <p>moedas por mês</p>
        </div>
      </div>
      <span>
        R${price}
      </span>
    </div>
  </Container>
  )
}
