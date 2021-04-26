import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${props=> props.color}; 
  border-radius: 0.8rem;
  margin-top: 1rem;
  display:flex;
  justify-content:space-between;
  flex-direction:column;
  color: #FFF;
  >img{
    width:50%;
    padding: 1rem;
    margin: 0 auto;
  }
  >div{
    background: ${props=> props.color}; 
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 1rem;
    border-radius: 0 0 0.85rem 0.85rem;
    >div{
      display:flex;
      align-items:center;
      >div{
        >span{
          font-size: 1.5rem;
        } 
      }
    }
    >span{
        font-size:1.5rem;
    }
  }
`;