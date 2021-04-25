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
  p {
    margin-top: 1rem;
  }

  > ul {
    list-style: none;
    margin-top: 1rem;
    > li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: .5rem;
      padding: 1.3rem;
      margin-top: 0.8rem;
      -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
      -moz-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);

      input {
        width: 20px;
        height: 20px;
      }
      input:checked {
        background-color: var(--primary);
      }
    }
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 2rem 1rem;
  left: 0;
`;
