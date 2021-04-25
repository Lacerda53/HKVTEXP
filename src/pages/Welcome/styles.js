import styled from "styled-components";

export const Container = styled.div`
  background: var(--background);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
`;

export const Header = styled.div`
  color: #fff;
  width: 85%;
  margin: 0 auto;
  padding: .5rem 0;
  border-left: 4px solid var(--primary);
  border-radius: 0.2rem;
  text-align: left;
  > div {
    margin-left: 1rem;
    >h1{
      font-weight: 400;
      color: #fff;
      >span{
        font-weight: bold;
      }
    }
    p{
      font-size: 1rem;
      margin-top: .5rem;
    }
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  > img {
    position: fixed;
    bottom: 0;
    width: 80%;
    margin: 0 10%;
  }
`;
