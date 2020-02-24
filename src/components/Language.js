import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1128px;
  margin: 0 auto 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Buttons = styled.a`
  font-size: 2rem;
  text-align: center;
  vertical-align: middle;
  height: 40px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
  border-radius: 2px;
  padding: 5px 60px;
  text-decoration: none;
  color: #333;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:last-child {
    margin-left: 50px;
  }
`;

const Language = () => {
  return (
    <Wrapper>
      <Buttons href="https://drive.google.com/uc?export=download&id=17NVEbobCBBGAB6Sx0VZCcI3YSoNtm2Xw">English</Buttons>
      <Buttons value="日本語">日本語</Buttons>
    </Wrapper>
  )
}

export default Language;