import './burgerMenu.scss';

const BurgerMenu = ({headerButtons, visibleBurger, selectSection}) => {
  const buttons = headerButtons.map(item => {
    return (
      <button className="burger-menu__button" type='button' key={item.id} onClick={() => {visibleBurger(false); selectSection(item.id);}}>{item.name}</button>
    );
  });

  return (
    <div className="burger-menu">
      <div className="burger-menu__wrapper">
        {buttons}
      </div>
      <button className="burger-menu__close" onClick={() => visibleBurger(false)}>&times;</button>
    </div>
  );
}

export default BurgerMenu;