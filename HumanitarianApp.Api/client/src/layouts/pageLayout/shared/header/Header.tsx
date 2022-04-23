// @ts-ignore
import logo from "../../../../assets/icons/humanitarian_logo.svg"
import './header.scss';
import React from "react";
import {HeaderButton} from "../headerButton/HeaderButton";

interface Props {
    headerButtonsText: Readonly<string[]>;
    activeBtn: string;
    selectSectionHandler: (value: string) => void;
    visibleBurgerHandler: (value: boolean) => void;
}

const Header = ({activeBtn, selectSectionHandler, visibleBurgerHandler, headerButtonsText}: Props) => {
    const headerButtons = () => {
        return headerButtonsText.map((item: string, index: number) => (
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
