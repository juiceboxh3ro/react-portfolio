import React from 'react'

const Language = ({handleLanguage}) => {
  return (
    <div id="language-buttons">
      <div className="language-button" onClick={handleLanguage}>English</div>
      <div className="language-button" onClick={handleLanguage}>日本語</div>
    </div>
  )
}

export default Language;