import React from 'react';
import visaLogo from '../../assets/img/visa.jpg';
import mcLogo from '../../assets/img/mastercard.png';
import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer clear">
      <div className="container footerContainer">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 mt-4">
            <div className="title">Наш магазин</div>
            <ul className="footerDesc">
              <li>
                <Link to="/delivery">Доставка и оплата</Link>
              </li>
              <li>
                <Link to="/about">О Нас</Link>
              </li>
              <li>
                <Link to="/shops">Магазины</Link>
              </li>
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-4">
            <div className="title">Каталог</div>
            <ul className="footerDesc">
              <li>
                <Link to="/chandeliers">Люстры</Link>
              </li>
              <li>
                <Link to="/sconce">Бра</Link>
              </li>
              <li>
                <Link to="/lamps">Настольные лампы</Link>
              </li>
              <li>
                <Link to="/floor-lamps">Напольные лампы</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-4">
            <div className="title">Способ оплаты</div>
            <div className="footerDesc">
              <div className="paidServices">
                <img src={visaLogo} alt="Visa" />
                <img src={mcLogo} alt="MasterCard" />
              </div>
              <div className="lowDesc">
                Вы можете оплатить покупки наличными при получении, либо выбрать
                другой способ оплаты.
              </div>
              <div className="license">Пользовательское соглашение</div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-4">
            <div className="title">Контакты</div>
            <div className="footerDesc">
              <div className="footerDescPhone">+9 (999) 999-99-99</div>
              <div className="footerDescEmail">light@gmail.com</div>
              <div className="footerDescSocials">Instagram WhatsApp</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rights text-center mt-3">2023-2023</div>
    </footer>
  );
};

export default Footer;
