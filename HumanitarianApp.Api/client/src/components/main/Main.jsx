import { Component } from "react";

import BurgerMenu from "../burger-menu/BurgerMenu";

import Header from "../header/Header";
import Section from "../section/Section";
import Footer from "../footer/Footer";
import Agreement from '../agreement/Agreement';

import Service from '../../services/Service';

import './main.scss';

import { ToastContainer } from 'react-toastify';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerButtons: [
        {id: 0, name: 'Волонтери'},
        {id: 1, name: 'Підприємства'},
        {id: 2, name: 'Оголошення'},
        // {id: 3, name: 'Допомогти'}
      ],
      visibleBurgerMenu: false,
      activeSection: 0,
      openAgreement: false,
      sectionsData: [
        {
          id: 0,
          name: 'Волонтери',
          searchResult: '',
          filter: 'Усі категорії',
          filterButtons: [
            {id: 0, name: 'Усі категорії'},
            {id: 1, name: 'Перевезення'},
            {id: 2, name: 'Медицина'},
            {id: 3, name: 'Гуманітарна допомога'},
            {id: 4, name: 'Інше'}
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
            }
          ]
        },
        {
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
        {
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
      ]
    }
  }

  body = document.querySelector('body');

  visibleBurger = (visibleBurgerMenu) => {
    this.setState({visibleBurgerMenu});
  }

  selectSection = (id) => {
    this.setState({
      activeSection: id
    })
  }

  renderSection = (section) => {
    const {id, name, filterButtons, ads, searchResult, filter} = section;

      const onUpdateSearch = searchResult => {
        section.searchResult = searchResult;
        this.setState({section});
      };

      const onFilterSelect = (filter) => {
        section.filter = filter;
        this.setState({section});
      };

      const search = (items, searchResult) => {
        if (searchResult.length === 0) {
          return items;
        }
    
        return items.filter(item => {
          return item.city.toLowerCase().indexOf(searchResult.toLowerCase()) > -1;
        });
      };

      const select = (items, filter) => {
        if (filter === 'Усі категорії') {
          return items;
        } else {
          return items.filter(item => item.select === filter);
        }
      };

      const visibleData = select(search(ads, searchResult), filter);

      return(
        <Section
          key={id}
          name={name}
          filterButtons={filterButtons}
          ads={visibleData}
          onUpdateSearch={onUpdateSearch}
          searchResult={searchResult}
          filter={filter}
          onFilterSelect={onFilterSelect}
          activeSection={this.state.activeSection}
          id={id}
          onOpenAgreement={this.onOpenAgreement} />
      );
  }

  onOpenAgreement = () => {
    this.setState(({openAgreement}) => ({
      openAgreement: !openAgreement
    }))
  }

  service = new Service();
  componentDidMount() {
    this.getAllVolunteers();
    this.getAllOrganizations();
    this.getAllAnnouncements();
  }

  getAllVolunteers = () => {
    this.service
      .get(`${process.env.REACT_APP_API_URL}Volunteer/GetAllActive?pageNumber=1`)
      .then((response) => {
        const volonteers = response.map((item) => {
          return {
            select: this.setVolunteersCategory(item.category),
            name: this.isEmpty(item.name),
            telephone: this.isEmpty(item.phoneNumber),
            email: this.isEmpty(item.email),
            city: this.isEmpty(item.city),
            address: this.isEmpty(item.address),
            text: this.isEmpty(item.description),  
            instagram: this.isEmpty(item.instagram),
            telegram: this.isEmpty(item.telegram),
            facebook: this.isEmpty(item.facebook),
            cardnumber: this.isEmpty(item.bankDetails?.cardNumber),
            fullbankname: this.isEmpty(item.bankDetails?.fullBankName),
            shortbankname: this.isEmpty(item.bankDetails?.shortBankName),
            mfo: this.isEmpty(item.bankDetails?.mfo),
            iban: this.isEmpty(item.bankDetails?.iban),
            edrpou: this.isEmpty(item.bankDetails?.edrpo),
            accountnumber: this.isEmpty(item.bankDetails?.accountNumber),
          };
        });
        let newsectionsData = Object.assign({}, this.state.sectionsData);
        newsectionsData[0].ads = volonteers;

        this.setState({ sectionsData: newsectionsData });
      });

      
  };

  isEmpty = (inputStr) => {
    if(inputStr){
      return inputStr;
    }
    return "";
  }

  getAllOrganizations = () => {
    this.service
      .get(`${process.env.REACT_APP_API_URL}Organization/GetAllActive?pageNumber=1`)
      .then((response) => {
        const organizations = response.map((item) => {
          return {
            name: this.isEmpty(item.name),
            telephone: this.isEmpty(item.phoneNumber),
            email: this.isEmpty(item.email),
            city: this.isEmpty(item.city),
            address: this.isEmpty(item.address),
            text: this.isEmpty(item.description),
            website: this.isEmpty(item.website),
          };
        });

        let newsectionsData = Object.assign({}, this.state.sectionsData);
        newsectionsData[1].ads = organizations;

        this.setState({ sectionsData: newsectionsData });
      });

      
  };

  getAllAnnouncements = () => {
    this.service
      .get(`${process.env.REACT_APP_API_URL}Announcement/GetAllActive?pageNumber=1`)
      .then((response) => {
        const announcements = response.map((item) => {
          return {
            select: this.setAnnouncementCategory(item.category),
            name: this.isEmpty(item.name),
            telephone: this.isEmpty(item.phoneNumber),
            email: this.isEmpty(item.email),
            city: this.isEmpty(item.city),
            address: this.isEmpty(item.address),
            text: this.isEmpty(item.description),
          };
        });
        

        let newsectionsData = Object.assign({}, this.state.sectionsData);
        newsectionsData[2].ads = announcements;

        this.setState({ sectionsData: newsectionsData });
      });
  };

  setVolunteersCategory = (category) => {
    if (category == 1) {
      return "Перевезення";
    }

    if (category == 2) {
      return "Медицина";
    }

    if (category == 3) {
      return "Гуманітарна допомога";
    }

    if (category == 4) {
      return "Інше";
    }

    return "";
  };

  setAnnouncementCategory = (category) => {
    if (category == 0) {
      return "Шукаю";
    }

    if (category == 1) {
      return "Знайшов";
    }

    if (category == 2) {
      return "Продам";
    }

    if (category == 3) {
      return "Придбаю";
    }

    if (category == 4) {
      return "Вiддам";
    }

    if (category == 5) {
      return "Прийму";
    }

    if (category == 6) {
      return "Iнше";
    }

    return "";
  };

  render() {
    const {headerButtons, visibleBurgerMenu, sectionsData, activeSection, openAgreement} = this.state;

    if (visibleBurgerMenu || openAgreement) {
      this.body.style.overflow = 'hidden';
    } else {
      this.body.removeAttribute('style');
    }
    
    return (
      <>
        <ToastContainer />
        <Header
          headerButtons={headerButtons}
          visibleBurger={this.visibleBurger}
          activeSection={this.state.activeSection}
          selectSection={this.selectSection}
        />
        <main>
          {visibleBurgerMenu ? <BurgerMenu headerButtons={headerButtons} visibleBurger={this.visibleBurger} selectSection={this.selectSection} /> : null}
          {openAgreement ? <Agreement onOpenAgreement={this.onOpenAgreement} /> : null}
          {this.renderSection(sectionsData[activeSection])}
        </main>
        <Footer />
      </>
    );
  }
};

export default Main;