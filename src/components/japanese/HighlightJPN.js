import React from 'react';
import { Wrapper } from '../styles';

const HighlightJPN = () => {
  return (
    <Wrapper>
      <h2>注目</h2>
      <div className="flex-wrapper">
        <div className="left">
          <p>フルスタックウェブ開発</p>
        </div>
        <div className="right">
          <p>上級レベルの日本語</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default HighlightJPN;