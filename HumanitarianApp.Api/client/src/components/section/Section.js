import { Component } from 'react';

import Form from '../form/Form';

import AdList from '../ad-list/AdList';

import './section.scss';

class Section extends Component {
  state = {
    searchValue: ''
  }

  onUpdateSearch = e => {
    const searchValue = e.target.value;
    this.setState({searchValue});
    this.props.onUpdateSearch(searchValue)
  }

  render() {
    return(
      <section className="section">
        <div className="section__form">
          <div className="container">
          {this.props.name === 'Волонтери' ? <Form title={'Анкета волонтера'} namePlaceholder={'Введіть ПІБ...'} closePopUp={this.closePopUp} areaPlaceholder={null} selects={this.props.filterButtons} /> : null}
          {this.props.name === 'Підприємства' ? <Form title={'Анкета підприємства'} namePlaceholder={'Назва підприємства...'} closePopUp={this.closePopUp} areaPlaceholder={null} selects={this.props.filterButtons} /> : null}
          {this.props.name === 'Оголошення' ? <Form title={'Додати оголошення'} namePlaceholder={'Введіть ПІБ...'} closePopUp={this.closePopUp} areaPlaceholder={'Введить текст оголошення...'} selects={this.props.filterButtons} /> : null}
          </div>
        </div>
        <div className="section__info">
          <div className="container">
            <div className="section__wrapper">
              <h2 className="subtitle subtitle--white">{this.props.name}: {this.props.ads.length}</h2>
              <div className="section__filters">
                <SectionCategories filterButtons={this.props.filterButtons} onFilterSelect={this.props.onFilterSelect} />
                <input
                  className="section__search"
                  type="text"
                  placeholder="Пошук за містом..."
                  value={this.state.searchResult}
                  onChange={(e) => this.onUpdateSearch(e)} />
                </div>
            </div>
          </div>
        </div>
        <div className="container">
          <AdList ads={this.props.ads} />
        </div>
      </section>
    );
  }
};

const SectionCategories = ({filterButtons, onFilterSelect}) => {
  const categories = filterButtons.map(button => {
    const {id, name} = button;

    return (
      <option key={id} value={name}>{name}</option>
    );
  });

  const selectCategories = <select className="section__categories" onChange={(e) => onFilterSelect(e.target.value)}>{categories}</select>;
  
  if (selectCategories.props.children.length === 0) {
    return null;
  } else {
    return selectCategories;
  }
}

export default Section;