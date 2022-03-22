import { Component } from 'react';

import logo from '../../assets/icons/humanitarian_logo.svg';

import './header.scss';

const Header = ({headerButtons, visibleBurger}) => {
  const buttons = headerButtons.map(item => {
    return (
      <button className="header__button" type='button' key={item.id} onClick={item.popUp}>{item.name}</button>
    );
  })
  
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <a className="header__logo" href="#">
            <img className="header__logo-img" src={logo} alt="Logo" />
          </a>
          <div className="header__buttons">
            {buttons}
          </div>
          <div className="header__burger" onClick={() => visibleBurger(true)}>
            <span className="header__burger--line"></span>
            <span className="header__burger--line"></span>
            <span className="header__burger--line"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;