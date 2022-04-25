// @ts-ignore
import logo from "../../../../assets/icons/humanitarian_logo.svg"
import './header.scss';
import React from "react";
import {HeaderButton} from "../headerButton/HeaderButton";
import {HeaderButtonsText} from "../../../../shared/modules/layout/layout.type";

interface Props {
    headerButtonsText: Readonly<HeaderButtonsText[]>;
    activeBtn: string;
    selectSectionHandler: (value: HeaderButtonsText) => void;
    visibleBurgerHandler: (value: boolean) => void;
}

const Header = ({activeBtn, selectSectionHandler, visibleBurgerHandler, headerButtonsText}: Props) => {
    const headerButtons = () => {
        return headerButtonsText.map((item: HeaderButtonsText, index: number) => (
            <HeaderButton
                key={`${index} HeaderBtn`}
                isActive={item === activeBtn}
                text={item}
                selectSection={selectSectionHandler}
            />
        ))
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <img className="header__logo-img" src={logo} alt="Logo"/>
                    </div>
                    <div className="header__buttons">
                        {headerButtons()}
                    </div>
                    <div className="header__burger" onClick={() => visibleBurgerHandler(true)}>
                        <span className="header__burger--line"/>
                        <span className="header__burger--line"/>
                        <span className="header__burger--line"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
