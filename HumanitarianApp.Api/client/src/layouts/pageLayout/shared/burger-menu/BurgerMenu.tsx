import React from "react";
import './burgerMenu.scss';

interface Props {
    headerButtons: Readonly<string[]>;
    visibleBurger: boolean;
    visibleBurgerHandler: (visible: boolean) => void;
    selectSection: (value: string) => void;
}

const BurgerMenu = ({headerButtons, visibleBurgerHandler, visibleBurger, selectSection}: Props) => {
    const clickHandle = (value: string) => {
        visibleBurgerHandler(false);
        selectSection(value);
    }

    return (
        <>
            {visibleBurger && (
                <div className="burger-menu">
                    <div className="burger-menu__wrapper">
                        {headerButtons.map(item => (
                            <button className="burger-menu__button" type='button' key={item}
                                    onClick={() => clickHandle(item)}>{item}</button>
                        ))}
                    </div>
                    <button className="burger-menu__close" onClick={() => visibleBurgerHandler(false)}>&times;</button>
                </div>)
            }
        </>
    );
}


export default BurgerMenu;
