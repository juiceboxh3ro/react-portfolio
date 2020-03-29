import React from 'react'

const Header = ({language}) => {
  return (
    <div>
      {language === "English" ? (
        <>
          <header>
            <h1><span id="span1">My LinkedIn Portfolio -</span> Created from scratch with React and coffee. <span id="span2">Ad</span></h1>
          </header>  
        </>
      ) : (
        <>
        <header>
          <h1><span id="span1">マイ LinkedIn ポートフォリオ -</span> コーヒーとReactと共にゼロから作られた. <span id="span2">広告</span></h1>
        </header>  
      </>
      )}
    </div>
  )
}

export default Header;