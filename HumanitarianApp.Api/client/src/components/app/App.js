import { Component } from "react";

import BurgerMenu from "../burger-menu/BurgerMenu";

import Header from "../header/Header";
import Section from "../section/Section";
import Footer from "../footer/Footer";
import Agreement from "../../agreement/Agreement";

import Service from '../../services/Service';

import './app.scss';

class App extends Component {
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
          ]
        },
        {
          id: 1,
          name: 'Підприємства',
          searchResult: '',
          filter: 'Усі категорії',
          filterButtons: [],
          ads: [
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
  }

  getAllVolunteers = () => {
    this.service
      .get("https://localhost:7057/api/Volunteer/GetAllActive?pageNumber=1")
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


  render() {
    const {headerButtons, visibleBurgerMenu, sectionsData, activeSection, openAgreement} = this.state;

    if (visibleBurgerMenu || openAgreement) {
      this.body.style.overflow = 'hidden';
    } else {
      this.body.removeAttribute('style');
    }
    
    return (
      <>
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

export default App;