import { Component } from "react";

import BurgerMenu from "../burger-menu/BurgerMenu";

import Header from "../header/Header";
import Section from "../section/Section";
import Footer from "../footer/Footer";

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
            },
          ],
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

  visibleBurger = (visibleBurgerMenu) => {
    this.setState({ visibleBurgerMenu });
  };

  selectSection = (id) => {
    this.setState({
      activeSection: id,
    });
  };

  renderSection = (section) => {
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
    debugger;
    this.getAllVolunteers();
    this.getAllOrganizations();
    this.getAllAnnouncements();
  }

  getAllVolunteers = () => {
    this.service
      .get("https://localhost:7057/api/Volunteer/GetAllEntity")
      .then((response) => {
        debugger;
        const volonteers = response.map((item) => {
          return {
            select: this.setVolunteersCategory(item.category),
            name: item.name,
            telephone: item.phoneNumber,
            email: item.email,
            city: item.city,
            address: item.address,
            text: item.description,
            cardnumber: item.bankDetails[0].cardNumber,
            fullbankname: item.bankDetails[0].fullBankName,
            shortbankname: item.bankDetails[0].shortBankName,
            mfo: item.bankDetails[0].mfo,
            iban: item.bankDetails[0].iban,
            edrpou: item.bankDetails[0].edrpo,
            accountnumber: item.bankDetails[0].accountNumber,
          };
        });

        let newsectionsData = Object.assign({}, this.state.sectionsData);
        newsectionsData[0].ads = volonteers;

        this.setState({ sectionsData: newsectionsData });
      });

      
  };

  getAllOrganizations = () => {
    this.service
      .get("https://localhost:7057/api/Organization/GetAllEntity")
      .then((response) => {
        debugger;
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
      .get("https://localhost:7057/api/Announcement/GetAllEntity")
      .then((response) => {
        debugger;
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
    debugger;
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
    debugger;
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

    return (
      <>
        <Header
          headerButtons={headerButtons}
          visibleBurger={this.visibleBurger}
          activeSection={this.state.activeSection}
          selectSection={this.selectSection}
        />
        <main>
          {visibleBurgerMenu ? (
            <BurgerMenu
              headerButtons={headerButtons}
              visibleBurger={this.visibleBurger}
              selectSection={this.selectSection}
            />
          ) : null}
          {this.renderSection(sectionsData[activeSection])}
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
