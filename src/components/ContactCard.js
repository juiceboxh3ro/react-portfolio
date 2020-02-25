import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 100px;
`;

const ContactCard = () => {
  return (
    <Wrapper>
      Form coming soon.<br />
      For now, click home or my logo to go back.
    </Wrapper>
  )
}

export default ContactCard;