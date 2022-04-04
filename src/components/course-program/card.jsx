import React from 'react';
import { base } from '../../base/base.js';
import './card.scss';

const Card = ({ list }) => {
  const { courseProgram } = base;

  const listFree = (item) => list === courseProgram && item.id === 1;

  const cards = list.map((item, key) => {
    return (
      <div className="card-wrapper">
        <div
          className={listFree(item) ? `card${item.id} cardFree` : `card${item.id}`}
          key={key + item.title}
        >
          <div className="title-group">
            <div className="title-text">
              <div className="bold">{item.id}.</div>
              <div className="thin">{item.title}</div>
            </div>
            {listFree(item) && <span className="free">free</span>}
          </div>
          <div className="detail-info">
            <ul>
              {item.texts.map((text, key) => {
                if (list === courseProgram) {
                  return <li key={item.id + key}>{text}</li>;
                } else {
                  return (
                    <div key={item.id + key} className="link">
                      <a href={text} target="_blank">
                        Перейти
                      </a>
                    </div>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="course-cards-wrapper">
      <div className="course-cards">{cards}</div>
    </div>
  );
};

export default Card;
