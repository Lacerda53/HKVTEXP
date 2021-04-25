import { useState } from "react";
import { Container, Card, Footer } from "./styles";
import { IoAddCircle, IoRemove } from "react-icons/io5";

export function Interests() {
  const [interests, setinterests] = useState(1);
  return (
    <Container>
      <h2>Interesses</h2>
      <Card>
        <label htmlFor="name">
          Quais serviços você tem interesse em adquirir?
        </label>
        <input
          type="text"
          value="Design gráfico"
          placeholder="Comidas e/ou bebidas para eventos"
        />
        <input
          type="text"
          value="Webdesign"
          placeholder="Comidas e/ou bebidas para eventos"
        />
        {interests > 1 && (
          <>
            <input
              type="text"
              placeholder="Comidas e/ou bebidas para eventos"
            />
            <IoRemove onClick={() => setinterests(interests - 1)} />
          </>
        )}
        <button onClick={() => setinterests(interests + 1)}>
          <IoAddCircle size="2rem" style={{ marginRight: ".6rem" }} />
          Adicionar outro
        </button>
      </Card>
      <Footer>
            <button>Finalizar</button>
      </Footer>
    </Container>
  );
}
