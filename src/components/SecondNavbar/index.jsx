import React from 'react';

import styles from './SecondNavbar.module.scss';

const SecondNavbar = () => {
  const [activeTabs, setActiveTabs] = React.useState(0);
  const [activeDropdown, setActiveDropdown] = React.useState(0);

  const tabs = ['Все', 'Люстры', 'Бра', 'Настольные лампы', 'Напольные лампы'];
  const dropdowns = ['популярности', 'цене', 'алфавиту'];

  const tabsHandler = (tabNumber) => {
    setActiveTabs(tabNumber);
  };

  const dropdownHandler = (dropdownNumber) => {
    setActiveDropdown(dropdownNumber);
  };

  return (
    <nav className="navbar sticky-top navbar-expand-md bg-light clear m-2 p-2">
      <div className="container">
        <div className="navbar-collapse collapse" id="navbarSupportedContent2">
          <ul className="navbar-nav me-0 ms-5 mb-2 mb-md-0">
            <li className="nav-item">
              <input
                className="form-control"
                type="search"
                placeholder="Поиск"
                aria-label="Search"
              />
            </li>
          </ul>
          <ul className="navbar-nav me-auto ms-auto mb-2 mb-md-0 nav nav-tabs">
            {tabs.map((tab, index) => (
              <li className="nav-item" key={index}>
                <span
                  onClick={() => tabsHandler(index)}
                  className={`nav-link ${
                    activeTabs === index ? 'active' : ''
                  }`}>
                  {tab}
                </span>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav me-5 ms-0">
            <span className={styles.sort}>сортировка по:</span>
            <li className="nav-item dropdown">
              <span
                className={`${styles.dropdownItem} nav-link dropdown-toggle`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                {dropdowns[activeDropdown]}
              </span>
              <ul className="dropdown-menu">
                <li>
                  <span
                    onClick={() => dropdownHandler(0)}
                    className="dropdown-item">
                    популярности
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => dropdownHandler(1)}
                    className="dropdown-item">
                    цене
                  </span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <span
                    onClick={() => dropdownHandler(2)}
                    className="dropdown-item">
                    алфавиту
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecondNavbar;
