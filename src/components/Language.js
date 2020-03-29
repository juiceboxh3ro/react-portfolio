import React from 'react'

// English CV https://drive.google.com/uc?export=download&id=17NVEbobCBBGAB6Sx0VZCcI3YSoNtm2Xw
// Japanese CV https://drive.google.com/uc?export=download&id=1Bw0xbcgtRYZ7RlGsNQdaXGB0JGf5hspC

const Language = ({handleLanguage}) => {
  return (
    <div id="language-buttons">
      <div className="language-button" onClick={handleLanguage}>English</div>
      <div className="language-button" onClick={handleLanguage}>日本語</div>
    </div>
  )
}

export default Language;