import React from 'react';

const Experience = ({language}) => {
  return (
    <div className="wrapper">
      {language === "English" ? (
        <>
          <h2>Experience</h2>
          <div className="portfolio">

          </div>
        </>
      ) : (
        <>
          <h2>経験</h2>
          <div className="portfolio">

          </div>
        </>
      )}
    </div>
  )
}

export default Experience;