import React from 'react';

import banner from "../img/0.jfif";
import profile from "../img/profilepic.jfif";
import business from "../img/tuj-logo.png";
import lambda from "../img/lambda.png";

// English CV https://drive.google.com/uc?export=download&id=17NVEbobCBBGAB6Sx0VZCcI3YSoNtm2Xw
// Japanese CV https://drive.google.com/uc?export=download&id=1Bw0xbcgtRYZ7RlGsNQdaXGB0JGf5hspC


const Cards = ({language}) => {
  return (
    <div id="container">
      <img src={banner} alt="Banner of Yokohama" />
      <div>
        <div className="flexbox">
          <div className="photo"></div>
        </div>
        <div id="img-cont">
          <img src={profile} alt="Profile" />
        </div>

        {language === "English" ? (
          <>
          <div id="info-cont">
            <div id="information-left">
              <h2>Jesse Goodburne</h2>
              <h3>Web Developer</h3>
              <ul>
                <li>Laurel, MD</li>
                <li>500+ connections</li>
                <li><a className="contact-link" href="https://drive.google.com/uc?export=download&id=17NVEbobCBBGAB6Sx0VZCcI3YSoNtm2Xw" alt="English Resume">Contact info</a></li>
                
              </ul>
            </div>
            <div id="information-right">
              <img src={business} alt=""/><span>Temple University</span><br />
              <img src={lambda} alt=""/><span>Lambda School</span>
            </div>
          </div>
          </>
        ) : (
          <>
            <div id="info-cont">
            <div id="information-left">
              <h2>グッドバーンジェシー</h2>
              <h3>フルスタックウェブ開発</h3>
              <ul>
                <li>ローラル、メリーランド州</li>
                <li>500人以上のコネクション</li>
                <li><a className="contact-link" href="https://drive.google.com/uc?export=download&id=1Bw0xbcgtRYZ7RlGsNQdaXGB0JGf5hspC" alt="履歴書">連絡</a></li>
              </ul>
            </div>
            <div id="information-right">
              <img src={business} alt=""/><span>テンプル大学</span><br />
              <img src={lambda} alt=""/><span>ラムダスクール</span>
            </div>
          </div>
         </>
        )}

      </div>
    </div>
  )
}

export default Cards;