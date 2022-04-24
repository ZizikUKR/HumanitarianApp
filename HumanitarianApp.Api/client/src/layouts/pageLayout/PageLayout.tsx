import React, {useState} from "react"
import Header from "./shared/header/Header"
import {Footer} from "./shared/footer/Footer"
import {ToastContainer} from 'react-toastify';
import BurgerMenu from "./shared/burger-menu/BurgerMenu";
import Agreement from "./shared/agreement/Agreement";

const headerButtonsText = ['Волонтери', 'Підприємства', 'Оголошення'] as const;

interface Props {
    children: JSX.Element;
}

export const PageLayout = ({children}: Props) => {
    const [activeBtn, setActiveBtn] = React.useState<string>(headerButtonsText[0]);
    const [visibleBurger, setVisibleBirger] = React.useState(false);
    const [openAgreement, setOpenAgreement] = useState(false);

    const selectSectionHandler = React.useCallback((activeBtnText: string) => {
        setActiveBtn(activeBtnText)
    }, [activeBtn])

    const visibleBurgerHandler = React.useCallback((visible: boolean) => {
        setVisibleBirger(visible);
    }, [visibleBurger])

    const openAgreementHandler = React.useCallback(() => {
        setOpenAgreement(!openAgreement);
    }, [openAgreement])

    return (
        <div>
            <ToastContainer/>
            <Header headerButtonsText={headerButtonsText}
                    activeBtn={activeBtn}
                    selectSectionHandler={selectSectionHandler}
                    visibleBurgerHandler={visibleBurgerHandler}/>
            <main>
                <BurgerMenu
                    visibleBurger={visibleBurger}
                    headerButtons={headerButtonsText}
                    visibleBurgerHandler={visibleBurgerHandler}
                    selectSection={selectSectionHandler}/>
                <Agreement openAgreement={openAgreement} onOpenAgreement={openAgreementHandler}/>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
