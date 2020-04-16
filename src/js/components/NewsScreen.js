import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './NewsScreen.css';

const NewsScreen = withRouter((props) => {
  const news = {
    head: '営業時間短縮について',
    date: '2020-04-12',
    contents: [
      {
        type: 'text',
        content:
          'それは次第いよいよこの病気者というものの一方が越しべきた。近頃将来の話者はとにかくその希望たたかもに叫びやしまっでがは刺戟思うんますば、これからには掘りですでですな。道を知れないのはまるで絶対にもしううべき。',
      },
      {
        type: 'text',
        content:
          'まあ岡田さんを吟味師範どうお話に知れだっ人その自分何か使用にというご助力ないですだろたから、この今もあなたか文芸年々歳々でもって、嘉納さんののをdoのそれにとうとうお懊悩とするながらあなた頭巾をお意味に食わせろようにけっして実相違のしでだて、もしちょうど発表をすんと来ます事と考えたた。しかしだからごお客と知っ事はそう自由と進んますて、その会員がは流行るありてといった底が申して来るだあっ。',
      },
      {
        type: 'image',
        content:
          'https://www.homemate-research.com/pubuser1/pubuser_facility_img/3/9/9/00000000000000458993/0000035147/00000000000000458993_0000035147_3.jpg?t=2857',
      },
    ],
  };

  return (
    <div className={styles.newsScreen}>
      <div className={styles.headWrapper}>
        <h2 className={styles.head}>{news.head}</h2>
        <p className={styles.date}>{news.date}</p>
      </div>
      {news.contents.map((c, index) => {
        if (c.type === 'text') {
          return (
            <div className={styles.content} key={index}>
              {c.content}
            </div>
          );
        } else if (c.type === 'image') {
          return (
            <div className={styles.content} key={index}>
              <img className={styles.image} src={c.content} />
            </div>
          );
        }
      })}
      <div className={styles.backWrapper}>
        <button className={styles.back} onClick={() => props.history.goBack()}>
          もどる
        </button>
      </div>
    </div>
  );
});

export default NewsScreen;
