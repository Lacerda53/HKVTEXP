import Message from "../../components/Message";
import { Container, Footer } from "./styles";
import sendSvg from '../../assets/send.svg'

export function Chat() {
  return (
    <Container>
      <Message message="Olá, tudo bem?" isLeft={false} />
      <Message
        message="Olá, tudo sim e contigo?"
        name="Nívia costa"
        isLeft={true}
      />
      <Message
        message="Tudo sim! Gostaria de saber mais informações sobre a permuta jurídica. Tenho um negócio de docinhos e salgadinhos."
        isLeft={false}
      />
      <Message
        message="Perfeito! Vamos conversar..."
        name="Nívia costa"
        isLeft={true}
      />

      <Footer>
        <input type="text" placeholder="Digite uma mensagem"/>
        <button>
          <img src={sendSvg} alt=""/>
        </button>
      </Footer>
    </Container>
  );
}
