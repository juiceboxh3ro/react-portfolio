import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Buttons = styled.a`
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  width: 150px;
  height: 32px;
  border: 1px solid #626262;
  padding: 4px 0;
  text-decoration: none;
  color: #333;
  color: #626262;
    
  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: none;
  }
  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const Language = () => {
  return (
    <Wrapper>
      <Buttons className="language-toggle active" href="https://drive.google.com/uc?export=download&id=17NVEbobCBBGAB6Sx0VZCcI3YSoNtm2Xw">English</Buttons>
      <Buttons className="language-toggle" href="https://drive.google.com/uc?export=download&id=1Bw0xbcgtRYZ7RlGsNQdaXGB0JGf5hspC">日本語</Buttons>
    </Wrapper>
  )
}

export default Language;