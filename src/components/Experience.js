import React from 'react';
import styled from 'styled-components';

const mobile = "(max-width: 415px)";
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

const Portfolio = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;

  div {
    margin: 0 auto 50px;
    padding: 15px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
    border-radius: 2px;
    font-size: 1.6rem;
    text-align: center;
    width: 200px;
    height: 200px;
    transition: opacity 0.3s ease;
    opacity: 0.7;
      
    &:hover {
      opacity: 1;
    }


    @media ${mobile} {
      width: 100px;
      height: 100px;
    }

    &:nth-child(2),
    &:nth-child(5) {
      @media ${mobile} {
        margin: 0 25px 50px;
      }
    }
  }
`;

const Experience = () => {
  return (
    <Wrapper>
      <h2>Experience</h2>
      <Portfolio>

      </Portfolio>
    </Wrapper>
  )
}

export default Experience;