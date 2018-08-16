import React from 'react';
import Isvg from 'react-inlinesvg';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';
import Link from 'next/link';
import Head from '../components/head';
import { Button } from '../components/button';

const globalColors = {
  primary: '#526e6e',
  secondary: '#e5e8e8',
  bg: '#D9D9D9',
  text: '#333333',
  secondaryText: '#2f2400',
};

const headerProps = {
  siteName: 'C94新刊「CSSではじめる同人誌制作 増訂版」 .∵. pentapod',
  title: 'C94新刊「CSSではじめる同人誌制作 増訂版」 .∵. pentapod',
  description: 'ウェブページも、書籍制作も、これ一冊で。 C94新刊「CSSではじめる同人誌制作 増訂版」',
  url: 'https://pentapod.github.io/c94',
  ogImage: 'https://pentapod.github.io/c94/static/og.png',
};
const shareText = headerProps.description + ' ' + headerProps.url;

const urls = {
  catalog: 'https://webcatalog.circle.ms/Circle/13906910',
  booth: 'https://pentapod.booth.pm/items/969754',
  // freeDownload: '',
  twitterShare: 'https://twitter.com/intent/tweet' + `?text=${encodeURIComponent(shareText)}`,
  facebookShare:
    'https://www.facebook.com/dialog/feed' +
    `?app_id=513983385471617` +
    `&display=popup&caption=${encodeURIComponent(headerProps.description)}` +
    `&link=${encodeURIComponent(headerProps.url)}` +
    `&redirect_uri=${encodeURIComponent('https://www.facebook.com/')}`,
  hatebuShare: `http://b.hatena.ne.jp/entry/${headerProps.url}`,
};

const delayingDisplaySelectors = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'ul',
  'dl',
  'table',
  '.text',
];

const Home = () => (
  <div>
    <Head {...headerProps} />

    <div className="left">
      <header>
        <div className="title header-item">
          <img src="static/title.svg" alt="CSSではじめる同人誌制作 増訂版" />
        </div>

        <div className="credit text header-item">Illust:&nbsp;にと</div>

        <div className="share-container header-item">
          <div className="buttons">
            <TwitterShareButton
              url={headerProps.url}
              title={headerProps.description}
              className="tw-share"
            >
              <TwitterIcon size={48} round />
            </TwitterShareButton>
            <FacebookShareButton
              url={headerProps.url}
              title={headerProps.title}
              description={headerProps.description}
              picture={headerProps.image}
              className="fb-share"
            >
              <FacebookIcon size={48} round />
            </FacebookShareButton>
          </div>
        </div>
      </header>
    </div>

    <div className="right">
      <section className="desc">
        <div className="container">
          <h2 className="type">
            ウェブページも、
            <wbr />
            書籍制作も、
            <wbr />
            これ一冊で。
          </h2>
          <p>
            HTMLで文章を書き、CSSでレイアウトを作るCSS組版。
            それは、Web技術によるレイアウトの柔軟さと、修正の容易さを兼ね備えた、新しい組版技術です。
            「CSSではじめる同人誌制作」を読んで、あなたも自分だけのオリジナルな本を作ってみませんか？
          </p>
          <h3>増訂版でさらにボリュームアップ！</h3>
          <p>
            「CSSではじめる同人誌制作 増訂版」では、初心者向けの章を中心に大幅加筆！
            前作は中級レベル以上の内容が中心でしたが、これからCSSに入門する方でも安心して読み始められます。
          </p>
        </div>
      </section>

      <section className="contents stripe">
        <div className="container">
          <center>
            <h2>コンテンツ</h2>
          </center>
          <div className="toc">
            <dl>
              <dt>
                <h3 className="heading">CSS組版を知る</h3>
              </dt>
              <dd>
                CSS組版とは／Vivliostyle／はじめてのHTML／はじめてのCSS／@-規則／擬似クラス・疑似要素／CSSレイアウト概論
              </dd>

              <dt>
                <h3 className="heading">紙面を作る</h3>
              </dt>
              <dd>
                ページの設定／ページ領域外のレイアウト／改ページ／段組／縦書き／タイポグラフィ／テキストの装飾／ルビ／書体・フォント機能／図表／脚注／ナンバリング／ラスタとベクタ／数式
              </dd>

              <dt>
                <h3 className="heading">原稿を出力する</h3>
              </dt>
              <dd>Chromeの印刷機能／PDF出力の自動化</dd>
            </dl>
          </div>
        </div>
      </section>

      <section className="spec">
        <div className="sample" />
        <div className="container">
          <table>
            <tbody>
              <tr>
                <th>タイトル</th>
                <td>
                  CSSではじめる同人誌制作 増訂版
                  <br />
                  ISDN <a href="https://isdn.jp/2784510121032">278-4-510121-03-2</a>
                </td>
              </tr>
              <tr>
                <th>頒布場所</th>
                <td>
                  <a href="https://techbookfest.org/event/tbf03">コミックマーケット94 3日目</a>
                  <br />
                  2018年8月12日(日) 10:00〜16:00
                  <br />
                  <strong>東プ-30a</strong>
                  &nbsp;
                  <a href={urls.catalog}>
                    <Button small theme={{ color: globalColors.primary }}>
                      カタログを見る
                    </Button>
                  </a>
                  <br />
                </td>
              </tr>
              <tr>
                <th>頒布価格</th>
                <td>
                  B5冊子版&nbsp;
                  <strong>¥700</strong>
                  <br />
                  電子版&nbsp;
                  <strong>¥500</strong>&nbsp;
                  <a href={urls.booth}>
                    <Button small theme={{ color: globalColors.primary }}>電子版を購入</Button>
                  </a>
                  <br />
                  冊子版購入者は電子版が&nbsp;
                  <strong>¥0!!!</strong>
                  <br />
                  {/* <a href={urls.freeDownload}>
                    <Button small theme={{ color: globalColors.text }}>ダウンロードページへ進む</Button>
                  </a> */}
                </td>
              </tr>
              <tr>
                <th>仕様</th>
                <td>B5 モノクロ 76ページ</td>
              </tr>
            </tbody>
          </table>

          <div className="info">
            <div className="description text">
              新刊の一部は
              <b>
                <Link href="https://webcatalog.circle.ms/Circle/13911791">
                  <a>1日目 西め-10a「かいていどうくつ」</a>
                </Link>
              </b>
              でも委託販売します
            </div>
          </div>

          <div className="info">
            <Link href="https://pentapod.github.io/tbf03">
              <a>
                <img src="static/tbf03_cover.jpg" />
              </a>
            </Link>
            <div className="description text">
              技術書典3新刊「
              <b>
                <Link href="https://pentapod.github.io/tbf03">
                  <a>やっていく合同誌</a>
                </Link>
              </b>
              」も頒布予定！
            </div>
          </div>
        </div>
      </section>

      <section className="share stripe">
        <div className="container">
          <center>
            <h3>このページを共有</h3>
          </center>
          <div className="buttons">
            <Link href={urls.twitterShare}>
              <a>
                <Button
                  inverse
                  theme={{ color: '#55acee', hoverColor: '#3b8dcc' }}
                  style={{ width: '100%' }}
                >
                  Twitter
                  <span className="long">でツイート</span>
                </Button>
              </a>
            </Link>
            <Link href={urls.facebookShare}>
              <a>
                <Button
                  inverse
                  theme={{ color: '#365899', hoverColor: '#1b386f' }}
                  style={{ width: '100%' }}
                >
                  Facebook
                  <span className="long">でシェア</span>
                </Button>
              </a>
            </Link>
            <Link href={urls.hatebuShare}>
              <a>
                <Button
                  inverse
                  theme={{ color: '#008fde', hoverColor: '#006fad' }}
                  style={{ width: '100%' }}
                >
                  はてなブックマーク
                  <span className="long">に登録</span>
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="brand-container">
          <a href="https://pentapod.github.io">
            <div className="logo" style={{ width: 25 }}>
              <Isvg src="/static/logo.svg" />
            </div>
            <div className="brand" style={{ width: 100 }}>
              <Isvg src="/static/brand.svg">pentapod</Isvg>
            </div>
          </a>
        </div>
      </footer>
    </div>

    <style jsx global>{`
      @font-face {
        font-family: 'NotoSansCJKjp-Jxck';
        font-style: normal;
        font-weight: 400;
        src: local('NotoSansCJKjp-Bold.otf'), local('NotoSansJP-Bold.otf'),
          url('static/fonts/NotoSansCJKjp-Jxck-Regular.woff2') format('woff2'),
          url('static/fonts/NotoSansCJKjp-Jxck-Regular.woff') format('woff');
      }
      @font-face {
        font-family: 'NotoSansCJKjp-Jxck';
        font-style: normal;
        font-weight: 700;
        src: local('NotoSansCJKjp-Bold.otf'), local('NotoSansJP-Bold.otf'),
          url('static/fonts/NotoSansCJKjp-Jxck-Bold.woff2') format('woff2'),
          url('static/fonts/NotoSansCJKjp-Jxck-Bold.woff') format('woff');
      }
      body {
        margin: 0;
        padding: 0;
        color: ${globalColors.text};
        background-color: #fff;
        font-size: 16px;
        font-weight: 400;
        font-family: 'niveau-grotesk', 'Noto Sans', 'Noto Sans CJK JP', 'NotoSansCJKjp-Jxck',
          sans-serif;
        word-spacing: 0.2em;
        -webkit-font-smoothing: antialiased;
        line-height: 1.8;
        line-break: strict;
        overflow-x: hidden;
      }
      @media (max-width: 480px) {
        body {
          font-size: 13px;
        }
      }
      p,
      dl {
        margin: 1rem 0;
      }
      a {
        color: #2a5ad6;
      }
      a:hover {
        color: #1740ab;
      }
      section {
        position: relative;
      }
      h1,
      h2,
      h3,
      h4 {
        margin: 0;
      }
      h1 {
        font-size: 2em;
      }
      h2 {
        font-size: 1.6em;
      }
      h3 {
        font-size: 1.3em;
      }
      h4 {
        font-size: 1.1em;
      }
      ul,
      ol {
        padding-left: 1em;
      }
      header .tw-share,
      header .fb-share {
        display: inline-block;
        cursor: pointer;
        margin-right: 18px;
      }
      .type {
        font-family: 'dnp-shuei-gothic-gin-std', sans-serif;
        font-feature-settings: 'palt', 'pwid';
        letter-spacing: 0.05em;
        line-height: 1.4;
      }
      ${delayingDisplaySelectors.join(',')} {
        transition: opacity 0.2s;
        opacity: 0;
      }

      ${delayingDisplaySelectors.map(s => 'html.wf-active ' + s).join(',')} {
        opacity: 1;
      }
    `}</style>

    <style jsx>{`
      .left {
        background-image: url(static/cover.jpg);
        background-size: cover;
        background-position: 0 15%;
      }
      .right {
        background-color: #ffffff;
      }
      @media (min-width: 980px) {
        .left {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          width: 40vw;
          box-sizing: border-box;
        }
        .right {
          margin-left: 40vw;
        }
      }

      header {
        position: relative;
        height: 100%;
        margin-right: 2vw;
      }
      header .title {
        position: absolute;
        right: 0;
        width: 60%;
      }
      header .credit {
        position: absolute;
        bottom: 0;
        right: 0;
      }
      header .share-container {
        position: absolute;
        bottom: 0;
        left: 0;
      }
      header .header-item {
        margin: 1rem;
      }

      @media (max-width: 979px) {
        header {
          height: 70vw;
          margin: 0;
        }
        header .header-item {
          margin: 2rem;
        }
        header .title {
          width: 45%;
        }
        header .credit {
          bottom: 1rem;
        }
      }
      @media (max-width: 480px) {
        header {
          height: 90vw;
        }
        header .header-item {
          margin: 2rem 1rem;
        }
        header .title {
          width: 60%;
        }
      }

      .container {
        max-width: 920px;
        margin: 0 auto;
        padding: 0 2.5rem;
      }
      @media (max-width: 480px) {
        .container {
          padding: 0 1rem;
        }
      }

      section {
        padding: 2rem 0;
      }

      .stripe {
        background-color: ${globalColors.primary};
        color: #fff;
        margin: 2rem 0 2rem -2vw;
        padding: 0.7rem 0 0.7rem 2vw;
        position: relative;
      }
      .stripe::before,
      .stripe::after {
        content: '';
        display: block;
        position: absolute;
        z-index: 100;
        left: 0;
        right: 0;
        width: 100%;
        height: 2.5rem;
        background-color: ${globalColors.primary};
        transform: skew(0, -2deg);
      }
      .stripe::before {
        top: -1.25rem;
      }
      .stripe::after {
        bottom: -1.25rem;
      }
      .stripe > * {
        position: relative;
        z-index: 101;
      }

      .desc {
        position: relative;
      }
      .desc::before {
        content: '';
        display: block;
        position: absolute;
        z-index: 100;
        top: -1.25rem;
        left: 0;
        right: 0;
        width: 100%;
        height: 2.5rem;
        background-color: #fff;
        transform: skew(0, -2deg);
      }

      .desc .type {
        color: ${globalColors.primary};
        font-size: 2rem;
        word-break: keep-all;
      }

      .spec {
        position: relative;
      }

      .spec .sample {
        position: absolute;
        z-index: 0;
        top: 35px;
        right: 0;
        width: 50%;
        overflow: hidden;
      }
      .spec .sample::before {
        content: '';
        display: block;
        height: 500px;
        width: 10000px;
        background-image: url(static/sample.png);
        background-size: contain;
        animation: sample-h500 40s linear infinite;
      }
      @keyframes sample-h500 {
        0% {
          transform: translate3d(0, 0, 0);
        }
        100% {
          transform: translate3d(-1803.29px, 0, 0);
        }
         {
          /* = 2961 * (500 / 821) */
        }
      }
      @keyframes sample-h300 {
        0% {
          transform: translate3d(0, 0, 0);
        }
        100% {
          transform: translate3d(-1081.97px, 0, 0);
        }
         {
          /* = 2961 * (300 / 821) */
        }
      }
      .spec .container {
        position: relative;
        z-index: 10;
      }
      .spec table {
        margin-bottom: 36px;
      }
      .spec tr {
        margin: 10px 0;
      }
      .spec th {
        font-weight: inherit;
        text-align: inherit;
        width: 4.5rem;
      }
      .spec td {
        line-height: 1.6;
        padding: 6px;
      }
      .spec strong {
        font-size: 24px;
        line-height: 1.3;
        font-weight: 700;
      }
      @media (min-width: 768px) {
        .spec .sample::after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 20%;
          height: 500px;
          background: linear-gradient(90deg, #ffffff 0, rgba(255, 255, 255, 0) 100%);
        }
      }
      @media (max-width: 767px) {
        .spec .sample {
          position: relative;
          top: 0;
          width: 100%;
          padding: 1.5rem 0;
        }
        .spec .sample::before {
          height: 300px;
          animation: sample-h300 30s linear infinite;
        }
        // .tbf02 {
        //   margin: 20px;
        //   width: auto;
        // }
      }

      .info {
        display: flex;
        max-width: 380px;
        margin: 1rem 0;
        padding: 1rem;
        background-color: ${globalColors.secondary};
        border-radius: 2px;
      }
      .info img {
        height: 105px;
        margin-right: 20px;
      }
      .info .description {
        flex-grow: 1;
      }

      .share .buttons {
        display: flex;
        margin: 0 -10px;
      }
      .share .buttons > * {
        flex-grow: 1;
        margin: 10px;
      }
      @media (max-width: 767px) {
        .share .buttons {
          flex-direction: column;
        }
        .share .buttons > * {
          margin: 10px 10vw;
        }
      }
      @media (max-width: 1200px) and (min-width: 768px) {
        .share span {
          font-size: 0;
        }
      }

      footer {
        padding: 2rem 0;
      }
      footer .brand-container {
        text-align: center;
      }
      footer .logo,
      footer .brand {
        display: inline-block;
        margin-left: auto;
        padding-right: 1em;
        fill: ${globalColors.text};
      }
    `}</style>
  </div>
);

export default Home;
