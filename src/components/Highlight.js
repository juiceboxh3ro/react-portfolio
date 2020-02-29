import React from 'react';
import { Wrapper } from './styles';

const Highlight = () => {
  return (
    <Wrapper>
      <h2>Highlights</h2>
      <div className="flex-wrapper">
        <div className="left">
          <p>Full-stack web developer</p>
        </div>
        <div className="right">
          <p>Fluent Japanese speaker</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Highlight;