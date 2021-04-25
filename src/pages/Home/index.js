import { Container, Switcher, Card, Header } from "./styles";
import jaquelineImg from "../../assets/jaqueline.png";
import niviaImg from "../../assets/nivia.png";
import { Tag } from "../../components/Tag";
import { useHistory } from "react-router";

export function Home() {
  const history = useHistory();
  return (
    <Container>
      <Switcher>
        <div>Permuta</div>
        <div>Contratar</div>
      </Switcher>
      <p>Pessoas precisando de seus serviços</p>

      <Card>
        <Header>
          <img src={jaquelineImg} alt="" />
          <div>
            <h4>Jaqueline Vieira</h4>
            <p>
              Sou Web Designer com experiência em desenvolvimento de logotipos,
              identidade visual, banners e material para impressão.
            </p>
          </div>
        </Header>
        <p>Oferece:</p>
        <div>
          <Tag title="Design" isOffers={true} />
          <Tag title="Identidade Visual" isOffers={true} />
          <Tag title="Cartão de visitas" isOffers={true} />
        </div>
        <p>Contrata:</p>
        <div>
          <Tag title="Doces e Salgadinhos" isOffers={false} />
          <Tag title="Serviços domésticos" isOffers={false} />
        </div>
        <button onClick={()=>history.push("/profile")}>MAIS DETALHES</button>
      </Card>

      <Card>
        <Header>
          <img src={niviaImg} alt="" />
          <div>
            <h4>Nívia Costa</h4>
            <p>
              Graduada em Direito com experiência na área fiscal e
              administrativa. Tenho compromisso de oferecer um serviço com
              qualidade e eficiência exigida.
            </p>
          </div>
        </Header>
        <p>Oferece:</p>
        <div>
          <Tag title="Jurídico" isOffers={true} />
          <Tag title="Administrativo" isOffers={true} />
        </div>
        <p>Contrata:</p>
        <div>
          <Tag title="Doces e Salgadinhos" isOffers={false} />
          <Tag title="Serviços de Eventos" isOffers={false} />
        </div>
        <button onClick={()=>history.push("/profile")}>MAIS DETALHES</button>
      </Card>
    </Container>
  );
}
