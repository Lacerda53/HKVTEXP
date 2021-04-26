import { Container } from "./styles";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiCoinStack } from "react-icons/bi";

export function Navbar() {
  return (
    <Container>
      <div>
        <HiOutlineMenuAlt1
          size="2rem"
          style={{ marginRight: ".8rem" }}
          color="var(--secondary)"
        />
        <IoMdNotificationsOutline size="2rem" color="var(--secondary)" />
      </div>
      <div>
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
