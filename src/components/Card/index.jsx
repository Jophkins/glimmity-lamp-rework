import React from 'react';

import styles from './Card.module.scss';

const Card = ({ id, title, price, imageUrl }) => {
  return (
    <div className="col-6 col-md-3 mt-4">
      <div className={styles.cardItem}>
        <img
          className="img-fluid"
          width="213"
          height="213"
          src={imageUrl}
          alt=""
        />
        <h5>{title}</h5>
        <div className={styles.cardItemBottom}>
          <div>
            <b>{price} руб.</b>
          </div>
          <div className={styles.cardItemBottomBtn}>
            <button>Просмотреть / Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
