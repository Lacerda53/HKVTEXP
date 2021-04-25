import { useState } from "react";
import { Container, Card, Footer } from "./styles";
import { IoAddCircle, IoRemove } from "react-icons/io5";
import { useHistory } from "react-router";

export function Interests() {
  const [interests, setinterests] = useState([]);
  const history = useHistory();
  return (
    <Container>
      <h2>Interesses</h2>
      <Card>
        <label htmlFor="name">
          Quais serviços você tem interesse em adquirir?
        </label>
        <input
          type="text"
          placeholder="Comidas e/ou bebidas para eventos"
        />
        {interests.map((item, index) => (
          <>
            <input key={index}
              type="text"
              placeholder="Comidas e/ou bebidas para eventos"
            />
            <IoRemove onClick={() => setinterests(interests.splice(1, index))} />
          </>
        ))}
        <button onClick={() => setinterests([...interests, { value: 'new'}])}>
          <IoAddCircle size="2rem" style={{ marginRight: ".6rem" }} />
          Adicionar outro
        </button>
      </Card>
      <Footer>
        <button onClick={()=>history.push('/home')}>FINALIZAR</button>
      </Footer>
    </Container>
  );
}
