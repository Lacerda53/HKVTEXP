import { Container, Card, Footer } from "./styles";
import cloudImg from "../../assets/cloud.svg";
import { useState } from "react";
import { IoAddCircle, IoRemove } from "react-icons/io5";
import { useHistory } from "react-router";

export function About() {
    const history =useHistory();
  const [services, setServices] = useState(1);
  return (
    <Container>
      <h2>Sobre você</h2>
      <Card>
        <h4>Perfil</h4>
        <label htmlFor="name">Nome Completo</label>
        <input type="text" placeholder="Digite seu Nome e Sobrenome" />
        <label htmlFor="description">Descrição</label>
        <textarea
          rows={4}
          type="text"
          placeholder="Descreva um resumo sobre você"
        />
        <label htmlFor="avatar">Foto de Perfil</label>
        <img src={cloudImg} alt="cloud" />
      </Card>
      <Card>
        <label htmlFor="name">Quais serviços você pode oferecer?</label>
        <input type="text" placeholder="Comidas e/ou bebidas para eventos" />
        {services > 1 && (
          <>
            <input
              type="text"
              placeholder="Comidas e/ou bebidas para eventos"
            />
            <IoRemove onClick={()=>setServices(services-1)}/>
          </>
        )}
        <button onClick={() => setServices(services + 1)}>
          <IoAddCircle size="2rem" style={{ marginRight: ".6rem" }} />
          Adicionar outro
        </button>
      </Card>
      <Footer>
            <button onClick={()=>history.push('/interests')}>PRÓXIMO</button>
      </Footer>
    </Container>
  );
}
