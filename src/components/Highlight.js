import React from 'react';

const Highlight = ({language}) => {
  return (
    <div className="wrapper">
      {language === "English" ? (
        <>
          <h2>Highlights</h2>
          <div className="flex-wrapper">
            <div className="left">
              <p>Full-stack web developer</p>
            </div>
            <div className="right">
              <p>Fluent Japanese speaker</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>注目</h2>
          <div className="flex-wrapper">
            <div className="left">
              <p>フルスタックウェブ開発</p>
            </div>
            <div className="right">
              <p>上級レベルの日本語</p>
            </div>
          </div>
        </>
      )}

    </div>
  )
}

export default Highlight;