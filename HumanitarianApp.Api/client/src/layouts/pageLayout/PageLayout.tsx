import React from "react"
import Header from "./shared/header/Header"
import {Footer} from "./shared/footer/Footer"
import {ToastContainer} from 'react-toastify';

const headerButtonsText = ['Волонтери', 'Підприємства', 'Оголошення'] as const;

interface Props {
    children: JSX.Element;
}

export const PageLayout = ({children}: Props) => {
    const [activeBtn, setActiveBtn] = React.useState<string>(headerButtonsText[0]);
    const [visibleBurger, setVisibleBirger] = React.useState(false)

    const selectSectionHandler = React.useCallback((activeBtnText: string) => {
        setActiveBtn(activeBtnText)
    }, [activeBtn])

    const visibleBurgerHandler = React.useCallback((visible: boolean) => {
        setVisibleBirger(visible);
    }, [activeBtn])

    return (
        <div>
            <ToastContainer/>
            <Header headerButtonsText={headerButtonsText}
                    activeBtn={activeBtn}
                    selectSectionHandler={selectSectionHandler}
                    visibleBurgerHandler={visibleBurgerHandler}/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
