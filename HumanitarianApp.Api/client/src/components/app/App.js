import { Component } from "react";

import BurgerMenu from "../burger-menu/BurgerMenu";

import Header from "../header/Header";
import Section from "../section/Section";
import Footer from "../footer/Footer";
import Agreement from "../../agreement/Agreement";

import Service from "../../services/Service";

import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerButtons: [
        { id: 0, name: "Волонтери" },
        { id: 1, name: "Підприємства" },
        { id: 2, name: "Оголошення" },
        // {id: 3, name: 'Допомогти'}
      ],
      visibleBurgerMenu: false,
      activeSection: 0,
      openAgreement: false,
      sectionsData: [
        {
          id: 0,
          name: "Волонтери",
          searchResult: "",
          filter: "Усі категорії",
          filterButtons: [
            { id: 0, name: "Усі категорії" },
            { id: 1, name: "Перевезення" },
            { id: 2, name: "Медицина" },
            { id: 3, name: "Гуманітарна допомога" },
            { id: 4, name: "Інше" },
          ],
          ads: [
            {
              select: "Перевезення",
              name: "Петров Іван Сергійович",
              telephone: "+38099112233",
              email: "petrov@qwerty.com",
              city: "Київ",
              address: "м. Перемоги, 1",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas.",
              cardnumber: "12345678901234",
              fullbankname: "GgggMmmmBbbbHhhh Bank",
              shortbankname: "GMBH Bank",
              mfo: "8465",
              iban: "2546542544",
              edrpou: "12345678",
              accountnumber: "484654654465454845",
            }
          ]
        },
        {
          id: 1,
          name: "Підприємства",
          searchResult: "",
          filter: "Усі категорії",
          filterButtons: [],
          ads: [
            {
              name: "Фірма",
              telephone: "+380674445566",
              email: "firma@qwerty.com",
              city: "Львів",
              address: "",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam architecto numquam aliquam quas aspernatur voluptatibus harum non cumque excepturi?.",
            },
          ],
        },
        {
          id: 2,
          name: "Оголошення",
          searchResult: "",
          filter: "Усі категорії",
          filterButtons: [
            { id: 0, name: "Усі категорії" },
            { id: 1, name: "Шукаю" },
            { id: 2, name: "Знайшов" },
            { id: 3, name: "Продам" },
            { id: 4, name: "Придбаю" },
            { id: 5, name: "Віддам" },
            { id: 6, name: "Прийму" },
            { id: 7, name: "Інше" },
          ],
          ads: [],
        },
      ],
    };
  }

  body = document.querySelector('body');

  visibleBurger = (visibleBurgerMenu) => {
    this.setState({ visibleBurgerMenu });
  };

  selectSection = (id) => {
    this.setState({
      activeSection: id,
    });
  };

  renderSection = (section) => {
<<<<<<< HEAD
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

  // Вызов метода гет
  // Обязательно передавать все поля, если поле пусто, то просто - ''
  // service = new Service();
  // componentDidMount() {
  //   this.service.get('https://localhost:7057/api/entity/GetEntityByType?type=0')
  //       .then(response => {
  //         debugger;
  //         let obj = {
  //           "select": response.select,
  //           "name": response.name,
  //           "telephone": response.telephone,
  //           "email": response.email,
  //           "city": response.city,
  //           "address": response.address,
  //           "text": response.title
  //         }

  //         // Пока что новые записи вставляются в конец списка, потом изменю.
  //         // const newAd = this.state.sectionsData[0].ads.push(obj); // 0 - волонтеры, 1 - предприятия, 2 - объявления

  //         // this.setState({newAd});
  //       })
  // }

  onOpenAgreement = () => {
    this.setState(({openAgreement}) => ({
      openAgreement: !openAgreement
    }))
  }

  render() {
    const {headerButtons, visibleBurgerMenu, sectionsData, activeSection, openAgreement} = this.state;

    if (visibleBurgerMenu || openAgreement) {
      this.body.style.overflow = 'hidden';
    } else {
      this.body.removeAttribute('style');
    }
    
=======
    const { id, name, filterButtons, ads, searchResult, filter } = section;

    const onUpdateSearch = (searchResult) => {
      section.searchResult = searchResult;
      this.setState({ section });
    };

    const onFilterSelect = (filter) => {
      section.filter = filter;
      this.setState({ section });
    };

    const search = (items, searchResult) => {
      if (searchResult.length === 0) {
        return items;
      }

      return items.filter((item) => {
        return item.city.toLowerCase().indexOf(searchResult.toLowerCase()) > -1;
      });
    };

    const select = (items, filter) => {
      if (filter === "Усі категорії") {
        return items;
      } else {
        return items.filter((item) => item.select === filter);
      }
    };

    const visibleData = select(search(ads, searchResult), filter);

    return (
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
      />
    );
  };

  // Вызов метода гет
  // Обязательно передавать все поля, если поле пусто, то просто - ''
  service = new Service();
  componentDidMount() {
    this.getAllVolunteers();
    this.getAllOrganizations();
    this.getAllAnnouncements();
  }

  getAllVolunteers = () => {
    this.service
      .get("https://localhost:7057/api/Volunteer/GetAll?pageNumber=1")
      .then((response) => {
        const volonteers = response.map((item) => {
          return {
            select: this.setVolunteersCategory(item.category),
            name: item.name,
            telephone: item.phoneNumber,
            email: item.email,
            city: item.city,
            address: item.address,
            text: item.description,
            cardnumber: item.bankDetails?.cardNumber,
            fullbankname: item.bankDetails?.fullBankName,
            shortbankname: item.bankDetails?.shortBankName,
            mfo: item.bankDetails?.mfo,
            iban: item.bankDetails?.iban,
            edrpou: item.bankDetails?.edrpo,
            accountnumber: item.bankDetails?.accountNumber,
          };
        });

        let newsectionsData = Object.assign({}, this.state.sectionsData);
        newsectionsData[0].ads = volonteers;

        this.setState({ sectionsData: newsectionsData });
      });

      
  };

  getAllOrganizations = () => {
    this.service
      .get("https://localhost:7057/api/Organization/GetAll?pageNumber=1")
      .then((response) => {
        const organizations = response.map((item) => {
          return {
            name: item.name,
            telephone: item.phoneNumber,
            email: item.email,
            city: item.city,
            address: item.address,
            text: item.description,
          };
        });

        let newsectionsData = Object.assign({}, this.state.sectionsData);
        newsectionsData[1].ads = organizations;

        this.setState({ sectionsData: newsectionsData });
      });

      
  };

  getAllAnnouncements = () => {
    this.service
      .get("https://localhost:7057/api/Announcement/GetAll?pageNumber=1")
      .then((response) => {
        const announcements = response.map((item) => {
          return {
            select: this.setAnnouncementCategory(item.category),
            name: item.name,
            telephone: item.phoneNumber,
            email: item.email,
            city: item.city,
            address: item.address,
            text: item.description,
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
    const { headerButtons, visibleBurgerMenu, sectionsData, activeSection } =
      this.state;

>>>>>>> master
    return (
      <>
        <Header
          headerButtons={headerButtons}
          visibleBurger={this.visibleBurger}
          activeSection={this.state.activeSection}
          selectSection={this.selectSection}
        />
        <main>
<<<<<<< HEAD
          {visibleBurgerMenu ? <BurgerMenu headerButtons={headerButtons} visibleBurger={this.visibleBurger} selectSection={this.selectSection} /> : null}
          {openAgreement ? <Agreement onOpenAgreement={this.onOpenAgreement} /> : null}
=======
          {visibleBurgerMenu ? (
            <BurgerMenu
              headerButtons={headerButtons}
              visibleBurger={this.visibleBurger}
              selectSection={this.selectSection}
            />
          ) : null}
>>>>>>> master
          {this.renderSection(sectionsData[activeSection])}
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
