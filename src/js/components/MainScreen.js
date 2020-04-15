import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './MainScreen.css';

import items from '../dummy';

const MainScreen = () => {
  const shop = {
    name: 'ダイソー',
    branch: '防府佐波店',
    tel: '0835-27-5811',
    logo:
      'https://www.daiso-sangyo.co.jp/wp-content/themes/daiso-co-html/vendor/top/img/footer_logo.png',
    appearance:
      'https://www.homemate-research.com/pubuser1/pubuser_facility_img/3/9/9/00000000000000458993/0000035147/00000000000000458993_0000035147_3.jpg?t=2857',
  };

  return (
    <div className={styles.mainScreen}>
      <section className={styles.section}>
        <h2 className={`${styles.head} ${styles.hidden}`}>店舗情報</h2>
        <div className={styles.shopWrapper}>
          <div className={styles.shopLogo}>
            <img className={styles.shopImage} src={shop.logo} alt={shop.name} />
          </div>
          <div className={styles.shopBranch}>
            <div className={styles.branchName}>{shop.branch}</div>
            <p className={styles.branchBusinessHour}>
              08:00〜21:00 <span className={styles.branchStatus}>営業中</span>
            </p>
          </div>
        </div>
        <img className={styles.appearance} src={shop.appearance} alt='外観' />
      </section>

      <section className={styles.section}>
        <h2 className={styles.head}>お知らせ</h2>
        <table className={styles.newsList}>
          <tbody>
            <tr className={styles.newsHead} key='1'>
              <td className={styles.newsDate}>4/12</td>
              <td className={styles.newsLink}>
                <Link to='/news'>営業時間短縮について</Link>
              </td>
            </tr>
            <tr className={styles.newsHead} key='2'>
              <td className={styles.newsDate}>4/3</td>
              <td className={styles.newsLink}>
                <Link to='/news'>キャッシュレス支払い方法追加</Link>
              </td>
            </tr>
            <tr className={styles.newsHead} key='3'>
              <td className={styles.newsDate}>3/21</td>
              <td className={styles.newsLink}>
                <Link to='/news'>新商品入荷のご紹介</Link>
              </td>
            </tr>
            <tr className={styles.newsHead} key='4'>
              <td className={styles.newsDate}>12/23</td>
              <td className={styles.newsLink}>
                <Link to='/news'>年末年始の営業時間について</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h2 className={styles.head}>商品をさがす</h2>
        <Link to='/search_keyword' className={styles.search}>
          <FontAwesomeIcon className={styles.searchIcon} icon='search' />
          <p className={styles.searchLabel}>キーワード</p>
        </Link>
        <Link to='/search_category' className={styles.search}>
          <FontAwesomeIcon className={styles.searchIcon} icon='folder' />
          <p className={styles.searchLabel}>カテゴリ</p>
        </Link>
      </section>
    </div>
  );
};

export default MainScreen;
