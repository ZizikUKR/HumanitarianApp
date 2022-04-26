import React from "react"
import Header from "./shared/header/Header"
import {Footer} from "./shared/footer/Footer"
import {ToastContainer} from 'react-toastify';
import BurgerMenu from "./shared/burger-menu/BurgerMenu";
import Agreement from "./shared/agreement/Agreement";
import Section from "./shared/section/Section";
import {headerButtonsText} from "shared/modules/layout/layout.const";
import {HeaderButtonsText} from "shared/modules/layout/layout.type";
import {sectionMoc} from "shared/modules/layout/layoutData.moc";
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";
import {useTimeout} from "../../shared/hook/useTimeout";

interface Props {
    children: JSX.Element;
    pageName: HeaderButtonsText;
}

export const PageLayout = ({children, pageName}: Props) => {
    const location = useLocation();
    const navigation = useNavigate();
    const sectionRef = React.useRef(sectionMoc[pageName]);
    const [searchValue, setSearchValue] = React.useState("")
    const [visibleBurger, setVisibleBirger] = React.useState(false);
    const [openAgreement, setOpenAgreement] = React.useState(false);
    const [openForm, setOpenForm] = React.useState(false);
    const [filter, setFilter] = React.useState("");

    React.useEffect(() => {
        if (visibleBurger || openAgreement) {
            document.body.style.overflow = 'hidden';

            return;
        }

        document.body.removeAttribute('style');
    }, [visibleBurger, openAgreement])

    useTimeout(() => {
        addQueryHandler({search: searchValue})
    }, [searchValue], true, 2000);

    const selectSectionHandler = React.useCallback((activeBtnText: HeaderButtonsText) => {
        navigation(sectionMoc[activeBtnText].link)
    }, [])

    const addQueryHandler = <T extends {}>(query: T): void => {
        navigation({
            pathname: location.pathname,
            search: createSearchParams(query).toString()
        });
    }

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

    const onFilterSelect = React.useCallback((value: string) => {
        setFilter(value);
    }, [filter]);

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
                         filterButtons={sectionRef.current.filterButtons}
                         ads={sectionRef.current.ads}
                         id={sectionRef.current.id}
                         onFilterSelect={onFilterSelect}
                />
                {children}
            </main>
            <Footer/>
        </div>
    )
}
