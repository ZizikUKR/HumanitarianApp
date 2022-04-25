import React from "react";
import './headerButton.scss';
import {HeaderButtonsText} from "../../../../shared/modules/layout/layout.type";

interface Props {
    isActive: boolean;
    selectSection: (text: HeaderButtonsText) => void;
    text: HeaderButtonsText;
}

export const HeaderButton = ({isActive, text, selectSection}: Props) => (
    <button
        className={`header__button ${isActive ? "header__button--active" : ""}`}
        type='button'
        onClick={() => selectSection(text)}>
        {text}
    </button>
)
