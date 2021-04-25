import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;

  > p {
    margin-top: 2rem;
  }
`;

export const Switcher = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 0.5rem;
    height: 2rem;
    color: var(--secondary);
    border: 0.1px solid #acbef5;

    &:nth-child(2) {
      border: 0;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  padding: 1.5rem;
  border-radius: 0.5rem;
  justify-content: center;
  flex-direction: column;
  -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);

  > h4 {
    color: var(--blue);
    font-size: 1.2rem;
  }
  > div {
    display: flex;
    width: 100%;
    overflow: scroll;
    padding-bottom: 1rem;
  }
  > p {
    font-size: 1.1rem;
    font-weight: 400;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  > button {
    margin-top: 2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0ebff;

  > img {
    width: 55%;
    height: 55%;
  }
  > div {
    margin-left: 1rem;

    > h4 {
      font-size: 1.1rem;
    }
    > p {
      margin-top: 0.8rem;
      font-weight: 400;
    }
  }
`;
