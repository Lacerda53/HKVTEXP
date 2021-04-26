import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items:center;
  padding: 1rem;
  border-bottom: 1px solid var(--gray);

  >div{
      display:flex;

      >div{
        span{
            color: var(--rose);
            font-weight: bold;
        }
        p{
            font-size: .8rem;
        }
      }
  }
`;
