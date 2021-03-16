import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';

class Header extends React.Component{
  render() {
    (() => {
      document.addEventListener("click", (e) => {
        const target:any = e.target;
        if (!target.classList.contains("js-smooth-scroll")) return;
        e.preventDefault();
        const targetId = target.hash;
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    })();
    return (
      <header>
      <div className="inner">
        <a href="#profile" className="js-smooth-scroll">
          <h1><span>M</span><span>Portfolio</span></h1>
        </a>
        <ul>
          <li><a href="#profile" className="js-smooth-scroll">PROFILE</a></li>
          <li><a href="#skill" className="js-smooth-scroll">SKILL</a></li>
          <li><a href="#works" className="js-smooth-scroll">WORKS</a></li>
          <li><a href="#contact" className="js-smooth-scroll">CONTACT</a></li>
        </ul>
      </div>
    </header>
    )
  }
}

class Fv extends React.Component{
  render() {
    return (
      <div className="profile" id="profile">
        <div className="inner">
          <ul className="profile__name">
            <li>
              <img src={"../img/me.png"} alt=""/>
            </li>
            <li>
              <p>Front-End Engineer</p>
              <p>SASAKI MICHINARI</p>
              <p>
                <a href="https://github.com/michinari-sasaki"
                >GitHub: @michinari-sasaki</a
                >
              </p>
            </li>
          </ul>
          <div className="profile__text">
            <p>
              はじめまして。佐々木道成と申します。<br />
              東京都在住のフロントエンドエンジニアです。<br />
              言語は特にPHPとJSが好きです。<br />
              マークアップの他にもWEBデザインや<br />
              動画制作、印刷などに携わってきました。<br />
            </p>
            <dl>
              <dt>趣味</dt>
              <dd>
                ギター、絵を描くこと、動画制作、ボカロ<br />フロントの新技術に悶えながら勉強すること
              </dd>
            </dl>
          </div>
        </div>
      </div>
    )
  }
}

class Skill extends React.Component{
  render() {
    return (
      <div>
        <span id="skill" className="anchor"></span>
          <section className="skill">
            <div className="inner">
              <h2 className="heading">SKILL</h2>
              <dl>
                <dt>言語</dt>
                <dd>
                  HTML5<br />
                  CSS3<br />
                  JavaScript<br />
                  Jquery<br />
                  PHP<br />
                  SQL<br />
                  Vue.js<br />
                  React<br />
                  Ruby(Ruby on Rails)<br />
                </dd>
              </dl>
              <dl>
                <dt>開発環境</dt>
                <dd>
                  Docker<br />
                  Git<br />
                  Slack<br />
                  VScode<br />
                </dd>
              </dl>
              <dl>
                <dt>その他</dt>
                <dd>
                  WordPress<br />
                  Gulp<br />
                  PostCSS<br />
                  WebPack<br />
                  TypeScript<br />
                  Heroku<br />
                  {/* Reduct<br />
                  Cloud9<br /> */}
                </dd>
              </dl>
            </div>
          </section>
        </div>
    )
  }
}

class Works extends React.Component{
  render() {
    return (
      <section className="works" id="works">
      <div className="inner">
        <h2 className="heading">WORKS</h2>
        <p className="works__notice">
          一部認証のかかっているページはこちらのID・PWをご利用くださいませ。<br />
          ID: gmoam<br />
          PW: test
        </p>
        <h3 className="heading--sub">Coding<span>コーディングのお仕事</span></h3>
        <ul className="works__list">
          <li>
            <div className="works__list__content">
              <h4>indeed</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>WordPress HTML5 CSS3 PHP JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>indeed採用サイト</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>２名 / 1ヶ月</dd>
              </dl>
              <a href="https://jp.indeed.jobs/" rel="noreferrer" target="_blank">サイトを見る</a>
            </div>
            <img src={"../img/tmb-01.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>セブンイレブン</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>HTML5 CSS3 PHP JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>オーナー募集サイト</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>2名 / 1ヶ月</dd>
              </dl>
              <a href="https://www.sej.co.jp/owner/" rel="noreferrer" target="_blank"
                >サイトを見る</a
              >
            </div>
            <img src={"../img/tmb-02.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>ミニストップ</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>WordPress HTML5 CSS3 PHP JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>オーナー募集サイト</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 1ヶ月</dd>
              </dl>
              <a href="https://www.ministop-fc.com/" rel="noreferrer" target="_blank"
                >サイトを見る</a
              >
            </div>
            <img src={"../img/tmb-03.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>川崎競馬</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>WordPress HTML5 CSS3 PHP JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>本サイト</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>4名 / 1ヶ月</dd>
              </dl>
              <a href="https://www.kawasaki-keiba.jp/" rel="noreferrer" target="_blank"
                >サイトを見る</a
              >
            </div>
            <img src={"../img/tmb-04.png"}  alt="" />
          </li>
          {/* <li>
            <div className="works__list__content">
              <h4>ブラックサンダー</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>WordPress HTML5 CSS3 PHP JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>ファンサイト</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>２名 / 1ヶ月</dd>
              </dl>
              <a href="https://blackthunder.jp/" rel="noreferrer" target="_blank"
                >サイトを見る</a
              >
            </div>
            <img src={"../img/tmb-05.png"}  alt="" />
          </li> */}
          <li>
            <div className="works__list__content">
              <h4>キョードー東京</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>WordPress HTML5 CSS3 PHP JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>シネオケ特別サイト</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://cineoke.info/" rel="noreferrer" target="_blank">サイトを見る</a>
            </div>
            <img src={"../img/tmb-06.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>GMO アドマーケティング</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>WordPress HTML5 CSS3 PHP JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>自社コンテンツポータルサイト</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>２名 / 1ヶ月</dd>
              </dl>
              <a href="http://gmo-am.jp/" rel="noreferrer" target="_blank">サイトを見る</a>
            </div>
            <img src={"../img/tmb-07.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>GMO TAXEL</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>WordPress HTML5 CSS3 PHP JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>自社プロダクトサイト</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / ２週間</dd>
              </dl>
              <a href="https://taxel.media/" rel="noreferrer" target="_blank">サイトを見る</a>
            </div>
            <img src={"../img/tmb-08.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>GMO NIKKO</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>WordPress HTML5 CSS3 PHP JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>採用サイト</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / ２週間</dd>
              </dl>
              <a href="https://www.koukoku.jp/recruit/" rel="noreferrer" target="_blank"
                >サイトを見る</a
              >
            </div>
            <img src={"../img/tmb-09.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>チャージスポット</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>HTML5 CSS3 PHP JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>キャンペーンページ</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 1週間</dd>
              </dl>
              <a href="http://seisaku.gmo-am.jp/test/spot/" rel="noreferrer" target="_blank"
                >サイトを見る</a
              >
            </div>
            <img src={"../img/tmb-16.png"}  alt="" />
          </li>
          {/* <li>
            <div className="works__list__content">
              <h4>ザオバ</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>WordPress HTML5 CSS3 PHP JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>コーポレートサイト</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 1ヶ月</dd>
              </dl>
              <a href="https://zaoba.co.jp/" rel="noreferrer" target="_blank">サイトを見る</a>
            </div>
            <img src={"../img/tmb-13.png"}  alt="" />
          </li> */}
          <li>
            <div className="works__list__content">
              <h4>ザオバ</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>WordPress HTML5 CSS3 PHP JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>コーポレートサイト</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 1ヶ月</dd>
              </dl>
              <a href="https://zaoba.co.jp/" rel="noreferrer" target="_blank">サイトを見る</a>
            </div>
            <img src={"../img/tmb-12.png"}  alt="" />
          </li>
        </ul>

        <h3 className="heading--sub">Other<span>学習のために作ったもの</span></h3>
        <ul className="works__list">
          <li>
            <div className="works__list__content">
              <h4>ハンターハンターキャラクター診断</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>JavaScript</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>勉強のために作った診断コンテンツです。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2日</dd>
              </dl>
              <a href="https://fast-beach-10367.herokuapp.com/" rel="noreferrer" target="_blank">サイトを見る</a>
            </div>
            <img src={"../img/mysite-01.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>このポートフォリオサイトです。</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>React TypeScript PostCSS</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2日</dd>
              </dl>
              <a
                href="https://github.com/michinari-sasaki/portfolio"
                rel="noreferrer" target="_blank"
                >GitHub</a
              >
            </div>
            <img src={"../img/mysite-02.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>ツイッター風アプリケーション</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>Ruby on Rails</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>ツイッター風のアプリケーションを作成しました。(ローカルでの開発)</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2日</dd>
              </dl>
              <a href="https://github.com/michinari-sasaki/tweet_app-" rel="noreferrer" target="_blank">GitHub</a>
            </div>
            <img src={"../img/mysite-03.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>デザインストック アプリケーション</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>PHP</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>
                  お気に入りのサイトを登録してSlackで共有するアプリケーションです。
                </dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="http://seisaku.gmo-am.jp/test/stock/" rel="noreferrer" target="_blank"
                >サイトを見る</a
              >
            </div>
            <img src={"../img/tmb-11.png"}  alt="" />
          </li>
        </ul>

        <h3 className="heading--sub">Design<span>デザインのお仕事</span></h3>
        <ul className="works__list">
          <li>
            <div className="works__list__content">
              <h4>千住金属</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>デザインのみ</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>リクルートの採用ページ</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 1週間</dd>
              </dl>
              <a href="http://seisaku.gmo-am.jp/test/senju/" rel="noreferrer" target="_blank"
                >サイトを見る</a
              >
            </div>
            <img src={"../img/tmb-10.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>KTX</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>HTML5 CSS3 JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインとコーディングを担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="http://seisaku.gmo-am.jp/test/ktx/" rel="noreferrer" target="_blank"
                >サイトを見る</a
              >
            </div>
            <img src={"../img/tmb-14.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>WOWOW シネフィル</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>HTML5 CSS3 JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>シネフィルのキャンペーンページです。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 1週間</dd>
              </dl>
              <a
                href="http://seisaku.gmo-am.jp/test/imagica-lp/"
                rel="noreferrer" target="_blank"
                >サイトを見る</a
              >
            </div>
            <img src={"../img/tmb-15.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>スカパー ディズニーチャンネル</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>HTML5 CSS3 JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>スカパーのキャンペーンページです。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 1週間</dd>
              </dl>
              <a
                href="http://seisaku.gmo-am.jp/test/disney_1806/"
                rel="noreferrer" target="_blank"
                >サイトを見る</a
              >
            </div>
            <img src={"../img/tmb-17.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>ヘルプマン</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>HTML5 CSS3 JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>介護系のLPを作成しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 1週間</dd>
              </dl>
              <a href="http://seisaku.gmo-am.jp/test/helpman/" rel="noreferrer" target="_blank"
                >サイトを見る</a
              >
            </div>
            <img src={"../img/tmb-18.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>電子書籍サイトランキング</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>HTML5 CSS3 JS</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>サイトクローズのため画像のみの掲載です。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="http://seisaku.gmo-am.jp/test/hikaku/" rel="noreferrer" target="_blank"
                >サイトを見る</a
              >
            </div>
            <img src={"../img/tmb-19.png"}  alt="" />
          </li>
        </ul>

        <h3 className="heading--sub">Movie<span>動画のお仕事</span></h3>
        <ul className="works__list">
          <li>
            <div className="works__list__content">
              <h4>タウンWi-Fiアプリ PR動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/6vLeXor_dg8" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-22.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>インフォグラフィック サンプル動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/I63-MtNrmYk" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-08.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>GMO アドマーケティング　PR動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/sYdWTHrlYUU" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-09.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>不動産紹介のサンプル動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/lpehM9jE7K0">動画を見る</a>
            </div>
            <img src={"../img/movie-01.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>車販促用サンプル動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/OEzMM19fMH0" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-14.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>AkaNe サンプル動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/nmpsFAsPTbk" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-15.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>美甘麗茶 販促用動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/zwd3py0So1M" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-02.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>神アプリ 販促用動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/moG0nM-vtCI" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-03.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>ひかり法律事務所 PR動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/B89Dj3_bT9U" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-04.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>ピンキープラス 販促用動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/OzNli7RA5aY" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-05.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>NuleNuleリップ 販促用動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/-Zp8PzKt5Rs" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-07.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>Qutt-Tea 販促用動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/BMew1LowIQU" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-10.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>化粧品 サンプル動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/MFy2um9P86g" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-11.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>フルーツ青汁 販促用動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/jXL_OvUvcbQ" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-12.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>フルーツ青汁 販促用動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/GBkgYcVHoYg" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-13.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>コミックログ PR動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/bNi2xZwCQNU" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-18.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>メビウス 販促用動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/CobSuj4Ay5Y" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-19.png"}  alt="" />
          </li>
          <li>
            <div className="works__list__content">
              <h4>ピンキープラス 販促用動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 2週間</dd>
              </dl>
              <a href="https://youtu.be/3YrIQJQOhgs" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-21.png"}  alt="" />
          </li>
          {/* <li>
            <div className="works__list__content">
              <h4>タウンWi-Fiアプリ PR動画</h4>
              <dl>
                <dt>使用技術</dt>
                <dd>AfterEffects PremierePro</dd>
              </dl>
              <dl>
                <dt>説明</dt>
                <dd>デザインと動画制作を担当しました。</dd>
              </dl>
              <dl>
                <dt>人数/工数</dt>
                <dd>1名 / 1週間</dd>
              </dl>
              <a href="https://youtu.be/uEka5dM7o8w" rel="noreferrer" target="_blank"
                >動画を見る</a
              >
            </div>
            <img src={"../img/movie-24.png"}  alt="" />
          </li> */}
        </ul>
      </div>
    </section>

    )
  }
}

class Footer extends React.Component{
  render() {
    return (
      <footer className="footer" id="contact">
      <h2 className="heading">CONTACT</h2>
      <p className="footer__mail">bdttb5369@gmail.com</p>
    </footer>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Fv />
    <Skill />
    <Works/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
