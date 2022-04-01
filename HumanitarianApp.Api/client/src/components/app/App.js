import { Component } from "react";

import BurgerMenu from "../burger-menu/BurgerMenu";

import Header from "../header/Header";
import Section from "../section/Section";
import Footer from "../footer/Footer";

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
            {
              "name": "Фірма",
              "telephone": "+380674445566",
              "email": "firma@qwerty.com",
              "city": "Львів",
              "address": "",
              "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam architecto numquam aliquam quas aspernatur voluptatibus harum non cumque excepturi?."
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
          id={id} />
      );
  }

  onInit = e=>{
    this.service.get('https://localhost:7057/api/Volunteer/GetAllEntity')
    .then(response => {
      debugger;
      var volonteers = [];

      for (let i = 0; i < response.length; ++i) {
       var volonteer =
        {
          //"select": `${response[i].category}`,
          "select": "Перевезення",
          "name": response[i].name,
          "telephone": response[i].phoneNumber,
          "email": response[i].email,
          "city": response[i].city,
          "address": response[i].address,
          "text": response[i].description,
          "bankDetils": []
        }
       
         if (response[i].bankDetails != null) {

          for (let j=0; j<response[i].bankDetails.length; j++) {
             let bankDetil =
            {
              "cardnumber": response[i].bankDetails[j].cardNumber,
              "fullbankname": response[i].bankDetails[j].fullBankName,
              "shortbankname": response[i].bankDetails[j].shortBankName,
              "mfo": response[i].bankDetails[j].mfo,
              "iban": response[i].bankDetails[j].iban,
              "edrpou": response[i].bankDetails[j].edrpo,
              "accountnumber": response[i].bankDetails[j].accountNumber
            }
            volonteer.bankDetils.push(bankDetil);
          }
          volonteers.push(volonteer);
        }
      }
      debugger;
      console.log(volonteers);
      return volonteers
  })};
  // Вызов метода гет
  // Обязательно передавать все поля, если поле пусто, то просто - ''
  service = new Service();
  componentDidMount() {
    this.service.get('https://localhost:7057/api/Volunteer/GetAllEntity')
      .then(response => {
     //   debugger;
        const newAd = this.state.sectionsData[0].ads;

        for (let i = 0; i < response.length; ++i) {
         var volonteer =
          {
            "select": response[i].category,
            "name": response[i].name,
             "telephone": response[i].phoneNumber,
            "email": response[i].email,
            "city": response[i].city,
            "address": response[i].address,
            "text": response[i].description,
            "bankDetils": []
          }
         
           if (response[i].bankDetails != null) {

            for (let j=0; j<response[i].bankDetails.length; j++) {
               let bankDetil =
              {
                "cardnumber": response[i].bankDetails[j].cardNumber,
                "fullbankname": response[i].bankDetails[j].fullBankName,
                "shortbankname": response[i].bankDetails[j].shortBankName,
                "mfo": response[i].bankDetails[j].mfo,
                "iban": response[i].bankDetails[j].iban,
                "edrpou": response[i].bankDetails[j].edrpo,
                "accountnumber": response[i].bankDetails[j].accountNumber
              }
              volonteer.bankDetils.push(bankDetil);
            }
            newAd.push(volonteer);
          }
        }

       //   this.setState({newAd}); провоцирует ворнингWarning: unstable_flushDiscreteUpdates: Cannot flush updates when React is already
      })

  }

  

  render() {
    const {headerButtons, visibleBurgerMenu, sectionsData, activeSection} = this.state;
    
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
          {this.renderSection(sectionsData[activeSection])}
        </main>
        <Footer />
      </>
    );
  }
};

export default App;