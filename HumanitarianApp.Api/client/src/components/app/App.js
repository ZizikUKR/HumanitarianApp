import { Component } from "react";

import BurgerMenu from "../burger-menu/BurgerMenu";
import PopUp from "../pop-up/PopUp";

import Header from "../header/Header";

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
      visibleBurgerMenu: false
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

  render() {
    const {volunteerPopUp, companyPopUp, adPopUp, headerButtons, visibleBurgerMenu} = this.state;

    return (
      <>
        {volunteerPopUp ? <PopUp title={'Анкета волонтера'} namePlaceholder={'Введіть ПІБ...'} closePopUp={this.closePopUp} areaPlaceholder={null} /> : null}
        {companyPopUp ? <PopUp title={'Анкета підприємства'} namePlaceholder={'Назва підприємства...'} closePopUp={this.closePopUp} areaPlaceholder={null} /> : null}
        {adPopUp ? <PopUp title={'Додати оголошення'} namePlaceholder={'Введіть ПІБ...'} closePopUp={this.closePopUp} areaPlaceholder={'Введить текст оголошення...'} /> : null}
        {visibleBurgerMenu ? <BurgerMenu headerButtons={headerButtons} visibleBurger={this.visibleBurger} /> : null}
        <Header
          headerButtons={headerButtons}
          onVolunteerPopUp={this.onVolunteerPopUp}
          onCompanyPopUp={this.onCompanyPopUp}
          onAdPopUp={this.onAdPopUp}
          visibleBurger={this.visibleBurger} />
      </>
    );
  }
};

export default App;