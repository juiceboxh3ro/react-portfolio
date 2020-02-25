import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 24px 24px 25px;
  margin-bottom: 15px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
  border-radius: 2px;
  background: #fff;
  grid-column-start: 1;
  
    h2 {
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 20px;
    }
    
    p {
      font-size: 1.4rem;
    }
`;

const About = () => {
  return (
    <Wrapper>
      <h2>About</h2>
      <p>I am a web developer, Japanese major, language enthusiast, and hobbyist photographer.</p>
      <br /><br />
      <p>I majored in Japanese at Temple University, Japan Campus in Tokyo, Japan. I lived there from August 2015 to December 2019, before returning to the US to study full-stack web development at Lambda School.</p>
      <p>I've been studying Japanese since 2011, Korean since 2013, and I'm dabbling in Chinese and Portuguese lately. I plan to take the Japanese proficiency test this coming December.</p>
      <br /><br />
      <p>Thank you for coming to my TED Talk. Please click the English or Japanese language buttons at the top-right for my résumé in that language.</p>
    </Wrapper>
  )
}

export default About;