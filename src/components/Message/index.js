import { Container } from "./styles";

export default function Message({ message, isLeft, name = "" }) {
  return (
    <Container isLeft={isLeft}>
      <div>
        {isLeft && name}
        <div>{message}</div>
      </div>
    </Container>
  );
}
