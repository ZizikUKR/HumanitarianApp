import React, {useState} from "react"
import Header from "./shared/header/Header"
import {Footer} from "./shared/footer/Footer"
import {ToastContainer} from 'react-toastify';
import BurgerMenu from "./shared/burger-menu/BurgerMenu";
import Agreement from "./shared/agreement/Agreement";
import {Section} from "./shared/section/Section";
import {headerButtonsText} from "shared/modules/layout/layout.const";
import {HeaderButtonsText} from "shared/modules/layout/layout.type";
import {sectionMoc} from "shared/modules/layout/layoutData.moc";
import {useNavigate} from "react-router-dom";

interface Props {
    children: JSX.Element;
    pageName: HeaderButtonsText;
}

export const PageLayout = ({children, pageName}: Props) => {
    const navigation = useNavigate();
    const [searchValue, setSearchValue] = useState("")
    const [visibleBurger, setVisibleBirger] = React.useState(false);
    const [openAgreement, setOpenAgreement] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [section] = useState(sectionMoc[pageName]);

    const selectSectionHandler = React.useCallback((activeBtnText: HeaderButtonsText) => {
        navigation(sectionMoc[activeBtnText].link)
    }, [])

    const visibleBurgerHandler = React.useCallback((visible: boolean) => {
        setVisibleBirger(visible);
    }, [visibleBurger])

    const openAgreementHandler = React.useCallback(() => {
        setOpenAgreement(!openAgreement);
    }, [openAgreement])

    const openFormHandler = React.useCallback(() => {
        setOpenForm(!openForm);
    }, [openForm])

    const updateSearchValueHandler = React.useCallback((value: string) => {
        setSearchValue(value);
    }, [searchValue])

    const onFilterSelect = (filter: string) => {
        console.log("Not understand what this func do")
    };

    return (
        <div>
            <ToastContainer/>
            <Header headerButtonsText={headerButtonsText}
                    activeBtn={pageName}
                    selectSectionHandler={selectSectionHandler}
                    visibleBurgerHandler={visibleBurgerHandler}/>
            <main>
                <BurgerMenu
                    visibleBurger={visibleBurger}
                    headerButtons={headerButtonsText}
                    visibleBurgerHandler={visibleBurgerHandler}
                    selectSection={selectSectionHandler}/>
                <Agreement openAgreement={openAgreement} onOpenAgreement={openAgreementHandler}/>
                <Section openForm={openForm} openFormHandle={openFormHandler} pageName={pageName}
                         onUpdateSearchValue={updateSearchValueHandler} searchValue={searchValue}
                         onOpenAgreement={openAgreementHandler}
                         filterButtons={section.filterButtons}
                         ads={section.ads}
                         id={section.id}
                         onFilterSelect={onFilterSelect}
                />
                {children}
            </main>
            <Footer/>
        </div>
    )
}
