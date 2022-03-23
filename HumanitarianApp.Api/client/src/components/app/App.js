import { Component } from "react";

import BurgerMenu from "../burger-menu/BurgerMenu";
import PopUp from "../pop-up/PopUp";

import Header from "../header/Header";
import Section from "../section/Section";

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
        {id: 0, name: 'Список волонтерів', filterButtons: [
          {id: 0, name: 'Усі категорії', active: true},
          {id: 1, name: 'Перевезення', active: false},
          {id: 2, name: 'Медицина', active: false},
          {id: 3, name: 'Гуманітарна допомога', active: false},
          {id: 4, name: 'Інше', active: false}
        ]},
        {id: 1, name: 'Список підприємств', filterButtons: []},
        {id: 2, name: 'Список оголошень', filterButtons: [
          {id: 0, name: 'Усі оголошення', active: true},
          {id: 1, name: 'Шукаю', active: false},
          {id: 2, name: 'Продам', active: false},
          {id: 3, name: 'Придбаю', active: false},
          {id: 4, name: 'Віддам', active: false},
          {id: 5, name: 'Прийму', active: false},
          {id: 6, name: 'Інше', active: false}
        ]}
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

  onFilterButton = (active) => {
    this.setState({filterButtons: {
      active: !active
    }})
  }

  renderSections = (arr) => {
    const sections = arr.map(item => {
      const {id, filterButtons, ...itemProps} = item;

      return(
        <Section key={id} filterButtons={filterButtons} {...itemProps} />
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
          {volunteerPopUp ? <PopUp title={'Анкета волонтера'} namePlaceholder={'Введіть ПІБ...'} closePopUp={this.closePopUp} areaPlaceholder={null} /> : null}
          {companyPopUp ? <PopUp title={'Анкета підприємства'} namePlaceholder={'Назва підприємства...'} closePopUp={this.closePopUp} areaPlaceholder={null} /> : null}
          {adPopUp ? <PopUp title={'Додати оголошення'} namePlaceholder={'Введіть ПІБ...'} closePopUp={this.closePopUp} areaPlaceholder={'Введить текст оголошення...'} /> : null}
          {visibleBurgerMenu ? <BurgerMenu headerButtons={headerButtons} visibleBurger={this.visibleBurger} /> : null}
          {this.renderSections(sectionsData)}
        </main>
      </>
    );
  }
};

export default App;