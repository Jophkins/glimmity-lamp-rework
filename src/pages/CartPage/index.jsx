import React from 'react';

import styles from './CartPage.module.scss';

const basket = [1, 2, 3, 4];

const CartPage = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className="container">
          {basket.length === 0 ? (
            <div className={styles.cartEmpty}>
              <div className="row">
                <div className="col-12">
                  <div className={`${styles.title} text-center`}>
                    Корзина пуста. Добавьте хотя бы один товар.
                  </div>
                  <div className={`${styles.desc} text-center`}>
                    Вы не приобрели ни одного товара. Пожалуйста вернитесь на
                    главную страницу или в тематический раздел и добавьте что
                    нибудь.
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={`${styles.checkout} mt-5`}>
              <div className="row">
                <div className="col-12">
                  <div className={`${styles.title} mb-5`}>
                    Оформление заказа
                  </div>

                  {/*{basketProductsToRender}*/}

                  <div className={`${styles.total} m-5`}>
                    <div className="row">
                      <div className="col-3 offset-3">
                        <input type="text" placeholder="Ваше имя" required />
                      </div>
                      <div className="col-3">
                        <input
                          type="text"
                          placeholder="Ваш номер телефона"
                          required
                        />
                      </div>
                      <div className="col-3">
                        <span className={styles.totalPrice}>
                          Итого: 12312 руб.
                        </span>
                        <button>Оформить заказ</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
