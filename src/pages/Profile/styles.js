import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      margin-top: 1.5rem;
      width: 20%;
    }
    > h4 {
      margin-top: 1.5rem;
    }
    > p {
      margin-top: 0.5rem;
      width: 85%;
      text-align: center;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid #e0ebff;
    }
  }
`;

export const Footer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 2rem 1rem;
  
  button {
    margin-top: 1rem;

    &.outline {
      background: transparent !important;
      border: 2px solid var(--primary);
      color: var(--primary);
    }
  }
`;

export const Evaliation = styled.div`
  display: flex;
  width: 28%;
  margin-top: 0.5rem;
  justify-content: space-between;
`;

export const Title = styled.h4`
  color: var(--blue);
  margin-top: 2rem;
  font-weight: 400;

  &:last-child {
    margin-top: 0;
  }
`;

export const Services = styled.h4`
  margin-top: 2rem;
  > div {
    display: flex;
    margin-bottom: 1.5rem;

    > img {
      width: 7%;
      margin-right: 0.5rem;
    }
    > div {
      margin-right: 1rem;
      span {
        color: var(--rose);
        font-weight: bold;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
`;
