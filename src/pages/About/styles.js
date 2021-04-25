import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 1.5rem;

  > h2 {
    font-size: 1.8rem;
  }
`;

export const Card = styled.div`
  display: flex;
  margin-top: 1.5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  justify-content: center;
  flex-direction: column;
  -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);

  >h4{
      color: var(--blue);
      font-size: 1.2rem;
  }
  >label{
      margin: 1rem 0;
      color: var(--blue);
  }

  >input, textarea{
      border: 1px solid var(--gray);
      border-radius: .5rem;
      min-height: 3rem;
      padding: 1rem;
      font-size: 1rem;
  }
  >img{
      display:flex;
      margin: 0 auto;
      width: 50%;
      padding: .5rem;
  }
  >button{
      margin-top: 1rem;
      display: flex;
      align-items:center;
      border-radius: 0;
      background: transparent;
      color: var(--secondary);
      font-weight: 400;
      font-size: 1.1rem;
  }
`;

export const Footer = styled.div`
    position: relative;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 2rem 0rem;
`;