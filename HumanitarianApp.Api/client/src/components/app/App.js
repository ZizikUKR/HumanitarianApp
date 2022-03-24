import { Component } from "react";

import BurgerMenu from "../burger-menu/BurgerMenu";
import PopUp from "../pop-up/PopUp";

import Header from "../header/Header";
import Section from "../section/Section";
import Footer from "../footer/Footer";

import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerButtons: [
        {id: 0, name: 'Волонтерам', popUp: () => this.onVolunteerPopUp(true)},
        {id: 1, name: 'Підприємствам', popUp: () => this.onCompanyPopUp(true)},
        {id: 2, name: 'Оголошення', popUp: () => this.onAdPopUp(true)},
        // {id: 3, name: 'Допомогти', popUp: null}
      ],
      volunteerPopUp: false,
      companyPopUp: false,
      adPopUp: false,
      visibleBurgerMenu: false,
      sectionsData: [
        {
          id: 0,
          name: 'Список волонтерів',
          searchResult: '',
          filter: 'Усі',
          filterButtons: [
            {id: 0, name: 'Усі'},
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
              "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas."
            },
            {
              "select": "Гуманітарна допомога",
              "name": "Олександров Василь Петрович",
              "telephone": "+380669998877",
              "email": "oleksandrov@qwerty.com",
              "city": "Днепр",
              "address": "пр. Свободи, 47/12",
              "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam architecto numquam aliquam quas aspernatur voluptatibus harum non cumque excepturi? Nesciunt reiciendis, autem deleniti debitis asperiores nulla ipsa sapiente doloribus officiis."
            },
            {
              "select": "Інше",
              "name": "Фомін Віталій Володимирович",
              "telephone": "+380674445566",
              "email": "fomin@qwerty.com",
              "city": "Запоріжжя",
              "address": "",
              "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam architecto numquam aliquam quas aspernatur voluptatibus harum non cumque excepturi? Nesciunt reiciendis, autem deleniti debitis asperiores nulla ipsa sapiente doloribus officiisa nulla ipsa sapiente doloribus officiis qwertyuiopas."
            },
            {
              "select": "Гуманітарна допомога",
              "name": "Петров Щлуксандр Васильович",
              "telephone": "+380687778899",
              "email": "petrov@qwerty.com",
              "city": "Днепр",
              "address": "",
              "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam architecto numquam aliquam quas aspernatur voluptatibus harum non cumque excepturi? Nesciunt reiciendis, autem deleniti debitis asperiores nulla ipsa sapiente doloribus officiis."
            }
          ]
        },
        {
          id: 1,
          name: 'Список підприємств',
          searchResult: '',
          filter: 'Усі',
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
          name: 'Список оголошень',
          searchResult: '',
          filter: 'Усі',
          filterButtons: [
            {id: 0, name: 'Усі'},
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

  onVolunteerPopUp = (volunteerPopUp) => {
    this.setState({volunteerPopUp});
  }

  onCompanyPopUp = (companyPopUp) => {
    this.setState({companyPopUp});
  }

  onAdPopUp = (adPopUp) => {
    this.setState({adPopUp});
  }

  closePopUp = () => {
    this.setState({
      volunteerPopUp: false,
      companyPopUp: false,
      adPopUp: false
    });
  }

  visibleBurger = (visibleBurgerMenu) => {
    this.setState({visibleBurgerMenu});
  }

  renderSections = (arr) => {
    const sections = arr.map(item => {
      const {id, name, filterButtons, ads, searchResult, filter} = item;

      const onUpdateSearch = searchResult => {
        item.searchResult = searchResult;
        this.setState({item});
      };

      const onFilterSelect = (filter) => {
        item.filter = filter;
        this.setState({item});
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
        if (filter === 'Усі') {
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
          onFilterSelect={onFilterSelect} />
      );
    })

    return sections;
  }

  render() {
    const {volunteerPopUp, companyPopUp, adPopUp, headerButtons, visibleBurgerMenu, sectionsData} = this.state;
    
    return (
      <>
        <Header
          headerButtons={headerButtons}
          onVolunteerPopUp={this.onVolunteerPopUp}
          onCompanyPopUp={this.onCompanyPopUp}
          onAdPopUp={this.onAdPopUp}
          visibleBurger={this.visibleBurger}
        />
        <main>
          {volunteerPopUp ? <PopUp title={'Анкета волонтера'} namePlaceholder={'Введіть ПІБ...'} closePopUp={this.closePopUp} areaPlaceholder={null} selects={sectionsData[0].filterButtons} /> : null}
          {companyPopUp ? <PopUp title={'Анкета підприємства'} namePlaceholder={'Назва підприємства...'} closePopUp={this.closePopUp} areaPlaceholder={null} selects={sectionsData[1].filterButtons} /> : null}
          {adPopUp ? <PopUp title={'Додати оголошення'} namePlaceholder={'Введіть ПІБ...'} closePopUp={this.closePopUp} areaPlaceholder={'Введить текст оголошення...'} selects={sectionsData[2].filterButtons} /> : null}
          {visibleBurgerMenu ? <BurgerMenu headerButtons={headerButtons} visibleBurger={this.visibleBurger} /> : null}
          {this.renderSections(sectionsData)}
        </main>
        <Footer />
      </>
    );
  }
};

export default App;