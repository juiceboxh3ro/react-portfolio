import React from 'react';
import styled from 'styled-components';

const mobile = "(max-width: 375px)";
const tablet = "(max-width: 768px)";

const Wrapper = styled.div`
  width: 100%;
  padding: 24px 24px 25px;
  margin-bottom: 50px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
  border-radius: 2px;
  background: #fff;
  grid-column-start: 1;

  @media ${mobile} {
    width: 95%;
  }
  
    h2 {
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 20px;
    }
    
    p {
      font-size: 1.4rem;
    }
`;

const Experience = () => {
  return (
    <Wrapper>
      <h2>Works</h2>
    </Wrapper>
  )
}

export default Experience;