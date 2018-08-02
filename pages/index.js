import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import { Button } from '../components/button';

const globalColors = {
  primary: '#526e6e',
  secondary: '#fff41a',
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
  // booth: '',
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

const Home = () => (
  <div>
    <Head {...headerProps} />

    <div className="left"></div>

    <div className="right">
      <section className="desc">
        <div className="container">
          <h2 className="type">ウェブページも、書籍制作も、これ一冊で。</h2>
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

      <section className="contents">
        <div className="container">
          <h2>掲載コンテンツ</h2>
          <div className="toc">
            <dl>
              <dt><h3 className="heading">CSS組版を知る</h3></dt>
              <dd>
                CSS組版とは／Vivliostyle／はじめてのHTML／はじめてのCSS／@-規則／擬似クラス・疑似要素／CSSレイアウト概論
              </dd>

              <dt><h3 className="heading">紙面を作る</h3></dt>
              <dd>
                ページの設定／ページ領域外のレイアウト／改ページ／段組／縦書き／タイポグラフィ／テキストの装飾／ルビ／書体・フォント機能／図表／脚注／ナンバリング／ラスタとベクタ／数式
              </dd>

              <dt><h3 className="heading">原稿を出力する</h3></dt>
              <dd>
                Chromeの印刷機能／PDF出力の自動化
              </dd>
            </dl>
          </div>
        </div>
      </section>

      <section className="spec">
        <div className="sample"></div>
        <div className="container">
          <table>
            <tbody>
              <tr>
                <th>タイトル</th>
                <td>
                  CSSではじめる同人誌制作 増訂版<br/>
                  ISDN <a href="https://isdn.jp/2784510121032">278-4-510121-03-2</a>
                </td>
              </tr>
              <tr>
                <th>頒布場所</th>
                <td>
                  <a href="https://techbookfest.org/event/tbf03">コミックマーケット94 3日目</a><br/>
                  2018年8月12日(日) 10:00〜16:00<br/>
                  <strong>東プ-30a</strong>&nbsp;
                  <a href={urls.catalog}>
                    <Button small theme={{ color: globalColors.text }}>カタログを見る</Button>
                  </a><br/>
                </td>
              </tr>
              <tr>
                <th>頒布価格</th>
                <td>
                  B5冊子版&nbsp;<strong>¥700</strong><br/>
                  電子版&nbsp;<strong>¥500</strong><br/>
                  {/* <a href={urls.booth}>
                    <Button small theme={{ color: globalColors.text }}>電子版を購入</Button>
                  </a> */}
                  冊子版購入者は電子版が<strong>¥0!!!</strong><br/>
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

          <div className="c92">
            <div className="description">
              新刊の一部は
              <strong>1日目 西め-10a「かいていどうくつ」</strong>
              でも委託販売予定です
            </div>
          </div>

          <div className="c92">
            <a href="https://pentapod.github.io/tbf03"><img src="static/tbf03_cover.jpg" /></a>
            <div className="description">
              技術書典3新刊「<a href="https://pentapod.github.io/tbf03">やっていく合同誌</a>」も頒布予定！
            </div>
          </div>
        </div>
      </section>

      <section className="share ribbon">
        <div className="container">
          <h3>このページを共有</h3>
          <div className="buttons">
            <Link href={urls.catalog}>
              <a>
                <Button inverse
                  theme={{ color: '#4caf50', hoverColor: '#319235' }}
                  style={{ width: '100%' }}
                >
                  Webカタログ
                  <span className="long">でお気に入りに追加</span>
                </Button>
              </a>
            </Link>
            <Link href={urls.twitterShare}>
              <a>
                <Button inverse
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
                <Button inverse
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
                <Button inverse
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
    </div>

    <style jsx global>{`
      @font-face {
        font-family: "NotoSansCJKjp-Jxck";
        font-style: normal;
        font-weight: 400;
        src: local("NotoSansCJKjp-Bold.otf"),
            local("NotoSansJP-Bold.otf"),
            url("static/fonts/NotoSansCJKjp-Jxck-Regular.woff2") format("woff2"),
            url("static/fonts/NotoSansCJKjp-Jxck-Regular.woff") format("woff");
      }
      @font-face {
        font-family: "NotoSansCJKjp-Jxck";
        font-style: normal;
        font-weight: 700;
        src: local("NotoSansCJKjp-Bold.otf"),
            local("NotoSansJP-Bold.otf"),
            url("static/fonts/NotoSansCJKjp-Jxck-Bold.woff2") format("woff2"),
            url("static/fonts/NotoSansCJKjp-Jxck-Bold.woff") format("woff");
      }
      body {
        margin: 0;
        padding: 0;
        color: ${globalColors.text};
        background-color: #fff;
        font-size: 16px;
        font-weight: 400;
        font-family: "niveau-grotesk","Noto Sans","Noto Sans CJK JP","NotoSansCJKjp-Jxck",sans-serif;
        word-spacing: 0.2em;
        line-height: 1.8;
        line-break: strict;
        overflow-x: hidden;
      }
      @media (max-width: 767px) {
        body {
          font-size: 13px;
        }
      }
      p {
        margin: 1em 0;
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
      h1, h2, h3, h4 {
        margin: 0;
      }
      h1  { font-size: 2.0em; }
      h2  { font-size: 1.6em; }
      h3  { font-size: 1.3em; }
      h4  { font-size: 1.1em; }
      ul, ol {
        padding-left: 1em;
      }
      header .tw-share, header .fb-share {
        display: inline-block;
        cursor: pointer;
        margin-right: 18px;
      }
      .type {
        font-family: "dnp-shuei-gothic-gin-std", sans-serif;
        font-feature-settings: 'palt', 'pwid';
        letter-spacing: .05em;
      }
    `}</style>

    <style jsx>{`
      .left {
        background-color: ${globalColors.primary};
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
          width: 35vw;
          box-sizing: border-box;
        }
        .right {
          margin-left: 35vw;
        }
      }

      .container {
        max-width: 920px;
        margin: 0 auto;
        padding: 0 2.5rem;
      }
      @media (max-width: 767px) {
        .container {
          padding: 0 1rem;
        }
      }

      section {
        padding: 2rem 0;
      }

      .desc .type {
        color: ${globalColors.primary};
        font-size: 2.4rem;
      }
      @media (max-width: 767px) {
        .desc .type {
          font-size: 5vw;
        }
      }

      .spec {
        position: relative;
        margin-bottom: 48px;
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
        width: 110px;
      }
      .spec td {
        line-height: 30px;
        padding: 6px;
      }
      .spec strong {
        font-size: 24px;
        font-weight: 700;
      }
    `}</style>
  </div>
);

export default Home;
