import React from 'react';

const About = ({language}) => {
  console.log(language)
  return (
    <div className="wrapper">
      {language === "English" ? (
        <>
          <h2>About</h2>
          <p>I am a web developer, Japanese major, language enthusiast, and hobbyist photographer.</p>
          <br /><br />
          <p>I majored in Japanese at Temple University, Japan Campus in Tokyo, Japan. I lived there from August 2015 to December 2019, before returning to the US to study full-stack web development at Lambda School.</p>
          <p>I've been studying Japanese since 2011, Korean since 2013, and I'm dabbling in Chinese and Portuguese lately.</p>
        </>
      ) : (
        <>
          <h2>自己紹介</h2>
          <p>私はウェブ開発、日本語の専攻、言語と撮影が好きな人です。</p>
          <p>東京のテンプル大学ジャパンキャンパスで日本語を専攻しました。2015年8月から2019年12月までそのために川崎市に住んでおりました。そのあと、ウェブ開発を学ぶようにアメリカに帰国して、現在一生懸命勉強しております。</p>
          <p>2011年から日本語を勉強しており、2013年から韓国語を勉強しており、最近中国語とポルトガル語をさり気なく勉強しております。</p>
        </>
      )}
    </div>
  )
}

export default About;