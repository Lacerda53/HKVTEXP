import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1rem;
  justify-content: ${(props) => (props.isLeft ? "flex-start" : "flex-end")};

  > div {
    width: 80%;
    font-weight: 500;

    > div {
      display: flex;
      padding: 1.5rem 1rem;
      border-radius: 0.8rem;
      font-weight: 300;
      background: ${(props) => (props.isLeft ? "#F3F6FE" : "var(--blue)")};
      color: ${(props) => (props.isLeft ? "#444048" : "#fff")};
    }
  }
`;
