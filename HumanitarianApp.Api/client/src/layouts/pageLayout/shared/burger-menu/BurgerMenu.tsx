import React from "react";
import './burgerMenu.scss';
import {HeaderButtonsText} from "shared/modules/layout/layout.type";

interface Props {
    headerButtons: Readonly<HeaderButtonsText[]>;
    visibleBurger: boolean;
    visibleBurgerHandler: (visible: boolean) => void;
    selectSection: (value: HeaderButtonsText) => void;
}

const BurgerMenu = ({headerButtons, visibleBurgerHandler, visibleBurger, selectSection}: Props) => {
    const clickHandle = (value: HeaderButtonsText) => {
        visibleBurgerHandler(false);
        selectSection(value);
    }

    return (
        <>
            {visibleBurger && (
                <div className="burger-menu">
                    <div className="burger-menu__wrapper">
                        {headerButtons.map((item: HeaderButtonsText) => (
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

export default React.memo(BurgerMenu);
