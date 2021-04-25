import { Container, Footer } from "./styles";
import { IoMailOutline } from "react-icons/io5";
import { FiLock, FiFacebook, FiTwitter } from "react-icons/fi";
import { useHistory } from "react-router";

export function Register() {
    const history = useHistory();
  return (
    <Container>
      <h2>Cadastre sua conta</h2>
      <form>
        <label htmlFor="email">EMAIL</label>
        <div>
          <IoMailOutline size="1.5rem" color="#AAA8AD" />
          <input type="email" placeholder="name@email.com" name="" id="" />
        </div>
        <label htmlFor="senha">SENHA</label>
        <div>
          <FiLock size="1.5rem" color="#AAA8AD" />
          <input type="password" placeholder="************" name="" id="" />
        </div>
        <button type="submit" onClick={()=>history.push('/segment')}>CADASTRAR</button>
        <p>
          Já tem conta? <a href="#">Login</a>
        </p>
      </form>
      <Footer>
        <a>
          <FiFacebook size="1.6rem" style={{position: "absolute", left: '3rem'}}/>
          CONTINUE COM FACEBOOK
        </a>
        <a>
          <FiTwitter size="1.6rem" style={{position: "absolute", left: '3rem'}}/>
          CONTINUE COM TWITTER
        </a>
      </Footer>
    </Container>
  );
}
