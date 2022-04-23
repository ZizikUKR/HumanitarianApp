import React from "react";
import './headerButton.scss';

interface Props {
    isActive: boolean;
    selectSection: (text: string) => void;
    text: string;
}

export const HeaderButton = ({isActive, text, selectSection}: Props) => (
    <button
        className={`header__button ${isActive ? "header__button--active" : ""}`}
        type='button'
        onClick={() => selectSection(text)}>
        {text}
    </button>
)
