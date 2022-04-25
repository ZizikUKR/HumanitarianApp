import React, {useState} from "react"
import Header from "./shared/header/Header"
import {Footer} from "./shared/footer/Footer"
import {ToastContainer} from 'react-toastify';
import BurgerMenu from "./shared/burger-menu/BurgerMenu";
import Agreement from "./shared/agreement/Agreement";
import {Section} from "./shared/section/Section";
import {headerButtonsText} from "../../shared/modules/layout/layout.const";
import {HeaderButtonsText} from "../../shared/modules/layout/layout.type";

interface Props {
    children: JSX.Element;
    pageName: HeaderButtonsText;
}

const sectionMoc = {
    'Волонтери': {
        id: 0,
        name: 'Волонтери',
        searchResult: '',
        filter: 'Усі категорії',
        filterButtons: [
            {id: 0, name: 'Усі категорії'},
            {id: 1, name: 'Перевезення'},
            {id: 2, name: 'Медицина'},
            {id: 3, name: 'Гуманітарна допомога'},
            {id: 4, name: 'Допомога переселенцям'},
            {id: 5, name: 'Допомога дітям'},
            {id: 6, name: 'Допомога тваринам'},
            {id: 7, name: 'Допомога літнім'},
            {id: 8, name: 'Допомога захисникам'},
            {id: 9, name: 'Їжа та продукти'},
            {id: 10, name: 'Ліки'},
            {id: 11, name: 'Консультація лікаря'},
            {id: 12, name: 'Евакуація з міста'},
            {id: 13, name: 'Пошук автоволонтерів'},
            {id: 14, name: 'Донорство крові'},
            {id: 15, name: 'Інше'}
        ],
        ads: [
            {
                "select": "Перевезення",
                "name": "Петров Іван Сергійович",
                "telephone": "+38099112233",
                "email": "petrov@qwerty.com",
                "city": "Київ",
                "address": "м. Перемоги, 1",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas.",
                "cardnumber": "12345678901234",
                "fullbankname": "GgggMmmmBbbbHhhh Bank",
                "shortbankname": "GMBH Bank",
                "mfo": "8465",
                "iban": "2546542544",
                "edrpou": "12345678",
                "accountnumber": "484654654465454845",
                "instagram": "",
                "telegram": "https://t.me/kolomiiitsev",
                "facebook": "https://www.facebook.com/kolomiiitsev/",
            },
            {
                "select": "Гуманітарна допомога",
                "name": "Олександров Василь Петрович",
                "telephone": "+380669998877",
                "email": "oleksandrov@qwerty.com",
                "city": "Днепр",
                "address": "пр. Свободи, 47/12",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam architecto numquam aliquam quas aspernatur voluptatibus harum non cumque excepturi? Nesciunt reiciendis, autem deleniti debitis asperiores nulla ipsa sapiente doloribus officiis.",
                "cardnumber": "",
                "fullbankname": "",
                "shortbankname": "",
                "mfo": "",
                "iban": "",
                "edrpou": "",
                "accountnumber": "",
                "instagram": "https://www.instagram.com/kolomiiitsev",
                "telegram": "",
                "facebook": "https://www.facebook.com/kolomiiitsev/",
            },
            {
                "select": "Інше",
                "name": "Фомін Віталій Володимирович",
                "telephone": "+380674445566",
                "email": "fomin@qwerty.com",
                "city": "Запоріжжя",
                "address": "",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam architecto numquam aliquam quas aspernatur voluptatibus harum non cumque excepturi? Nesciunt reiciendis, autem deleniti debitis asperiores nulla ipsa sapiente doloribus officiisa nulla ipsa sapiente doloribus officiis qwertyuiopas.",
                "cardnumber": "",
                "fullbankname": "",
                "shortbankname": "",
                "mfo": "",
                "iban": "",
                "edrpou": "",
                "accountnumber": "",
                "instagram": "https://www.instagram.com/kolomiiitsev",
                "telegram": "https://t.me/kolomiiitsev",
                "facebook": "",
            },
            {
                "select": "Гуманітарна допомога",
                "name": "Петров Александр Васильович",
                "telephone": "+380687778899",
                "email": "",
                "city": "Днепр",
                "address": "",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam architecto numquam aliquam quas aspernatur voluptatibus harum non cumque excepturi? Nesciunt reiciendis, autem deleniti debitis asperiores nulla ipsa sapiente doloribus officiis.",
                "cardnumber": "43219876543210",
                "fullbankname": "",
                "shortbankname": "",
                "mfo": "8465",
                "iban": "2546542544",
                "edrpou": "0123456789",
                "accountnumber": "484654654465454845",
                "instagram": "https://www.instagram.com/kolomiiitsev",
                "telegram": "https://t.me/kolomiiitsev",
                "facebook": "https://www.facebook.com/kolomiiitsev/",
            },
            {
                "select": "Медицина",
                "name": "Дубровський Георгій В'ячеславович",
                "telephone": "+380633211221",
                "email": "heorhii@qwerty.com",
                "city": "Хмельницький",
                "address": "мм. Квітневий, 27/80",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam architecto numquam aliquam quas aspernatur voluptatibus harum non cumque excepturi? Nesciunt reiciendis, autem deleniti debitis asperiores nulla ipsa sapiente doloribus officiisa nulla ipsa sapiente doloribus officiis qwertyuiopas.",
                "cardnumber": "12345678",
                "fullbankname": "йфяцічувскамепинртгоьшлбщд",
                "shortbankname": "йфяцічусскам",
                "mfo": "123456566654546",
                "iban": "64654654465465465465",
                "edrpou": "0123456789",
                "accountnumber": "апу65+5+65ппукпук5п565пку546",
                "instagram": "https://www.instagram.com/kolomiiitsev",
                "telegram": "https://t.me/kolomiiitsev",
                "facebook": "https://www.facebook.com/kolomiiitsev/",
            },
            {
                "select": "Ліки",
                "name": "Дубровський Георгій В'ячеславович",
                "telephone": "+380633211221",
                "email": "heorhii@qwerty.com",
                "city": "Хмельницький",
                "address": "мм. Квітневий, 27/80",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam architecto numquam aliquam quas aspernatur voluptatibus harum non cumque excepturi? Nesciunt reiciendis, autem deleniti debitis asperiores nulla ipsa sapiente doloribus officiisa nulla ipsa sapiente doloribus officiis qwertyuiopas.",
                "cardnumber": "12345678",
                "fullbankname": "йфяцічувскамепинртгоьшлбщд",
                "shortbankname": "йфяцічусскам",
                "mfo": "123456566654546",
                "iban": "64654654465465465465",
                "edrpou": "0123456789",
                "accountnumber": "апу65+5+65ппукпук5п565пку546",
                "instagram": "https://www.instagram.com/kolomiiitsev",
                "telegram": "https://t.me/kolomiiitsev",
                "facebook": "https://www.facebook.com/kolomiiitsev/",
            }
        ]
    },
    'Підприємства': {
        id: 1,
        name: 'Підприємства',
        searchResult: '',
        filter: 'Усі категорії',
        filterButtons: [],
        ads: [
            {
                "name": "Фірма",
                "telephone": "+380674445566",
                "email": "firma@qwerty.com",
                "city": "Львів",
                "address": "",
                "website": "https://www.ruskiy-korabl.idi.na.xyi",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam architecto numquam aliquam quas aspernatur voluptatibus harum non cumque excepturi?."
            },
            {
                "name": "Фірма",
                "telephone": "+380674445566",
                "email": "firma@qwerty.com",
                "city": "Львів",
                "address": "",
                "website": "",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam architecto numquam aliquam quas aspernatur voluptatibus harum non cumque excepturi?."
            }
        ]
    },
    'Оголошення': {
        id: 2,
        name: 'Оголошення',
        searchResult: '',
        filter: 'Усі категорії',
        filterButtons: [
            {id: 0, name: 'Усі категорії'},
            {id: 1, name: 'Шукаю'},
            {id: 2, name: 'Знайшов'},
            {id: 3, name: 'Продам'},
            {id: 4, name: 'Придбаю'},
            {id: 5, name: 'Віддам'},
            {id: 6, name: 'Прийму'},
            {id: 7, name: 'Інше'}
        ],
        ads: []
    }
}

export const PageLayout = ({children, pageName}: Props) => {
    const [searchValue, setSearchValue] = useState("")
    const [activeBtn, setActiveBtn] = React.useState<string>(headerButtonsText[0]);
    const [visibleBurger, setVisibleBirger] = React.useState(false);
    const [openAgreement, setOpenAgreement] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [section] = useState(sectionMoc[pageName]);

    const selectSectionHandler = React.useCallback((activeBtnText: string) => {
        setActiveBtn(activeBtnText)
    }, [activeBtn])

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
