import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: .9rem;
  align-items: center;
  margin-right: .5rem;
  border-radius: 1rem;
  white-space: nowrap;
  padding: 1rem;
  height: 2rem;
  background: ${(props) => (props.isOffers ? "#FFE3B2" : "#C8D5FA")};
  color: ${(props) => (props.isOffers ? "#C28619" : "#4D67B2")};
`;
