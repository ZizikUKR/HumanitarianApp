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
              "accountnumber": "484654654465454845"
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
              "accountnumber": ""
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
              "accountnumber": ""
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
              "accountnumber": "484654654465454845"
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

  // Вызов метода гет
  // Обязательно передавать все поля, если поле пусто, то просто - ''
  service = new Service();
  componentDidMount() {
    this.service.get('https://localhost:7057/api/entity/GetEntityByType?type=0')
        .then(response => {
          debugger;
          let obj = {
            "select": response.select,
            "name": response.name,
            "telephone": response.telephone,
            "email": response.email,
            "city": response.city,
            "address": response.address,
            "text": response.title
          }

          // Пока что новые записи вставляются в конец списка, потом изменю.
          // const newAd = this.state.sectionsData[0].ads.push(obj); // 0 - волонтеры, 1 - предприятия, 2 - объявления

          // this.setState({newAd});
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