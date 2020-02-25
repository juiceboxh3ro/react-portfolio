import React from 'react'
import styled from 'styled-components';

const Header1 = styled.header`
  max-width: 1128px;
  margin: -6px auto;
  
  h1 {
    font-size: 1.6rem;
    text-align: center;
    font-weight: 600;
    position: relative;
    
    #span1 {
      font-size: 1.6rem;
      color: #0084BF;
      font-weight: 600;

      &:hover {
        cursor: pointer;
      }
    }
    #span2 {
      font-size: 1.2rem;
      color: #777;
      font-weight: 100;
      margin-left: 8px;

      &::after {
        content: "…";
        position: absolute;
        padding-left: 8px;
        bottom: 4px;
        font-size: 1.8rem;
        font-weight: 400;
        color: black;
        vertical-align: top;
      }
      &:hover::after {
        content: "No need to manage your ad options; no ads! :)";
        font-size: 1rem;
        display: inline;
      }
    }
  }
`;

const Header = () => {
  return (
    <div>
      <Header1>
        <h1><span id="span1">My LinkedIn Portfolio -</span> Created from scratch with React and coffee. <span id="span2">Ad</span></h1>
      </Header1>
    </div>
  )
}

export default Header;