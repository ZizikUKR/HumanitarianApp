import React, {useState} from "react";
import Form from 'components/form/Form';
import './section.scss';
import {SectionCategories} from "../sectionCategories/SectionCategories";
import {HeaderButtonsText} from "shared/modules/layout/layout.type";

const formOptions: Record<HeaderButtonsText, FormOptions> = {
    'Волонтери': {
        title: "Анкета волонтера",
        namePlaceholder: 'Введіть ПІБ',
        areaPlaceholder: null
    },
    'Підприємства': {
        title: 'Анкета підприємства',
        namePlaceholder: 'Назва підприємства',
        areaPlaceholder: null
    },
    'Оголошення': {
        title: 'Додати оголошення',
        namePlaceholder: 'Введіть ПІБ',
        areaPlaceholder: 'Введить текст оголошення'
    }
}

interface FormOptions {
    title: string;
    namePlaceholder: string;
    areaPlaceholder: string | null;
}

interface Props {
    searchValue: string;
    onUpdateSearchValue: (value: string) => void;
    pageName: HeaderButtonsText;
    openForm: boolean;
    openFormHandle: () => void;
    onOpenAgreement: () => void;
    ads: any[];
    onFilterSelect: (value: string) => void;
    filterButtons: any[];
    id: number;
}

const Section = ({
                            filterButtons,
                            onFilterSelect,
                            ads,
                            searchValue,
                            onUpdateSearchValue,
                            onOpenAgreement,
                            pageName,
                            openForm,
                            openFormHandle,
                            id
                        }: Props) => {
    const [buttonName] = useState(pageName === "Волонтери" ? 'волонтера' : pageName === "Підприємства" ? 'підприємство' : 'оголошення')

    return (
        <section className="section">
            <div className="section__form">
                <div className="container">
                    {openForm ?
                        <Form  {...formOptions[pageName]} id={id} selects={filterButtons}
                               onOpenAgreement={onOpenAgreement}/> : null}
                </div>
                <button className="section__open" onClick={openFormHandle}>
                    {openForm ? 'Закрити форму' : `Додати ${buttonName}`}
                </button>
            </div>
            <div className="section__info">
                <div className="container">
                    <div className="section__wrapper">
                        <h2 className="subtitle subtitle--white">{pageName}: {ads.length}</h2>
                        <div className="section__filters">
                            <SectionCategories filterButtons={filterButtons}
                                               onFilterSelect={onFilterSelect}/>
                            <input
                                className="section__search"
                                type="text"
                                placeholder="Пошук за містом..."
                                value={searchValue}
                                onChange={(e) => onUpdateSearchValue(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Section)
