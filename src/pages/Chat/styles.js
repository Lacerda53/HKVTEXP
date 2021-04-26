import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export const Footer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  left: 0%;
  width: 100%;
  padding: 2rem 1rem;

  >input{
    width: 85%;
    border: 0;
    background: #F0F0F0;
    padding: 1rem 1.5rem;
    border-radius: 2rem;
    &::placeholder{
      color: #757575;
    }
  }
  >button{
    width: 12%;
  }
`;