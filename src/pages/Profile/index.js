import { Container, Evaliation, Title, Services, Footer } from "./styles";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import niviaImg from "../../assets/nivia.png";
import { BiCoinStack } from "react-icons/bi";
import { Tag } from "../../components/Tag";
import arrowsSvg from "../../assets/arrows.svg";
import { useHistory } from "react-router";

export function Profile() {
  const history = useHistory();
  return (
    <Container>
      <div>
        <img src={niviaImg} alt="" />
        <Evaliation>
          <ImStarFull size="1.3rem" color="#F6A91F" />
          <ImStarFull size="1.3rem" color="#F6A91F" />
          <ImStarFull size="1.3rem" color="#F6A91F" />
          <ImStarFull size="1.3rem" color="#F6A91F" />
          <ImStarHalf size="1.3rem" color="#F6A91F" />
        </Evaliation>
        <h4>Nívia Costa</h4>
        <p>
          Graduada em Direito com experiência na área fiscal e administrativa.
          Tenho compromisso de oferecer um serviço com qualidade e eficiência
          exigida.
        </p>
      </div>
      <Title>Serviços</Title>
      <Services>
        <div>
          <BiCoinStack
            size="2rem"
            style={{ marginRight: ".5rem" }}
            color="var(--secondary)"
          />
          <div>
            <span>5.000</span>
            <p>moedas</p>
          </div>
          <Tag title="Jurídico" isOffers={true} />
        </div>
        <div>
          <BiCoinStack
            size="2rem"
            style={{ marginRight: ".5rem" }}
            color="var(--secondary)"
          />
          <div>
            <span>5.000</span>
            <p>moedas</p>
          </div>
          <Tag title="Administrativo" isOffers={true} />
        </div>
        <div>
          <img src={arrowsSvg} />
          <div>
            <span>Permuta</span>
            <p>Sob contato</p>
          </div>
          <Tag title="Jurídico" isOffers={true} />
          <Tag title="Administrativo" isOffers={true} />
        </div>
      </Services>
      <Title>Busca</Title>
      <Services>
        <div>
          <img src={arrowsSvg} />
          <div>
            <span>Permuta</span>
            <p>Sob contato</p>
          </div>
          <Tag title="Doces" isOffers={false} />
          <Tag title="Serviços de Eventos" isOffers={false} />
        </div>
      </Services>
      <Footer>
        <button className="outline" onClick={()=>history.push('/chat')}>ENTRAR EM CONTATO</button>
        <button>CONTRATAR</button>
      </Footer>
    </Container>
  );
}
