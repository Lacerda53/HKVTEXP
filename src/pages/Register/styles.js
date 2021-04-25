import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background);
  height: 100vh;
  width: 100%;
  padding: 1.5rem;
  > h2 {
    font-size: 1.8rem;
    color: #fff;
  }
  > form {
    margin-top: 20vh;
    > label {
      color: #fff;
      letter-spacing: 1.5px;
      font-weight: bold;
      font-size: 0.8rem;
    }
    > div {
      display: grid;
      grid-template-columns: 10% 85%;
      justify-content: center;
      align-items: center;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      width: 100%;
      height: 3rem;
      border-radius: 0.3rem;
      background: #fff;
      > input {
        border: 0;
        width: 100%;
        height: 100%;
      }
    }
    button {
      margin-top: 2rem;
    }
    p {
      font-weight: 600;
      margin-top: 2rem;
      text-align: center;
      color: var(--gray);
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 1rem;
  position: absolute;
  left: 0;
  bottom: 0;
  flex-direction: column;

  > a {
    display: flex;
    margin-top: 1.5rem;
    background: transparent;
    border: 1px solid #aaa8ad;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #fff;
    font-weight: 500;
    border-radius: 1.5rem;
    height: 3rem;
    cursor: pointer;
  }
`;
