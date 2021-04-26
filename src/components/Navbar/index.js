import { Container } from "./styles";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { BiCoinStack } from "react-icons/bi";
import { useHistory } from "react-router";

export function Navbar() {
  const history = useHistory();
  return (
    <Container>
      <div>
        <IoHomeOutline onClick={()=>history.push('/home')}
          size="2rem"
          style={{ marginRight: ".8rem", cursor: 'pointer' }}
          color="var(--secondary)"
        />
        <IoMdNotificationsOutline size="2rem" color="var(--secondary)" />
      </div>
      <div style={{cursor: 'pointer'}} onClick={()=>history.push("/plans")}>
        <BiCoinStack
          size="2rem"
          style={{ marginRight: ".5rem" }}
          color="var(--secondary)"
        />
        <div>
          <span>2.000</span>
          <p>moedas</p>
        </div>
      </div>
    </Container>
  );
}
