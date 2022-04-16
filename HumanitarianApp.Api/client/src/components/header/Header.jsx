import logo from '../../assets/icons/humanitarian_logo.svg';

import './header.scss';

const Header = ({headerButtons, activeSection, selectSection, visibleBurger}) => { 
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <img className="header__logo-img" src={logo} alt="Logo" />
          </div>
          <div className="header__buttons">
            <HeaderButton headerButtons={headerButtons} activeSection={activeSection} selectSection={selectSection} />
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

const HeaderButton = ({headerButtons, activeSection, selectSection}) => {
  const buttons = headerButtons.map(item => {
    const clazz = activeSection === item.id ? 'header__button header__button--active' : 'header__button';

    return (
      <button className={clazz} type='button' key={item.id} onClick={() => {selectSection(item.id)}}>{item.name}</button>
    );
  });

  return buttons;
}

export default Header;