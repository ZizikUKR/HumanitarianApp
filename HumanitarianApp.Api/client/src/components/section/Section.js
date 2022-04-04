import { Component } from 'react';

import Form from '../form/Form';

import AdList from '../ad-list/AdList';

import './section.scss';

class Section extends Component {
  state = {
    searchValue: '',
    openForm: false,
  }

  onUpdateSearch = e => {
    const searchValue = e.target.value;
    this.setState({searchValue});
    this.props.onUpdateSearch(searchValue)
  }

  openButtonName = () => {
    switch (this.props.activeSection) {
      case 0:
        return 'волонтера';
      case 1:
        return 'підприємство';
      case 2:
        return 'оголошення';
    }
  }

  onOpenForm = () => {
    this.setState({
      openForm: !this.state.openForm
    })
  }

  render() {
    return(
      <section className="section">
        <div className="section__form">
          <div className="container">
          {this.state.openForm ? (this.props.name === 'Волонтери' ? <Form id={this.props.id} title={'Анкета волонтера'} namePlaceholder={'Введіть ПІБ'} areaPlaceholder={null} selects={this.props.filterButtons} /> : null) : null}
          {this.state.openForm ? (this.props.name === 'Підприємства' ? <Form id={this.props.id} title={'Анкета підприємства'} namePlaceholder={'Назва підприємства'} areaPlaceholder={null} selects={this.props.filterButtons} /> : null) : null}
          {this.state.openForm ? (this.props.name === 'Оголошення' ? <Form id={this.props.id} title={'Додати оголошення'} namePlaceholder={'Введіть ПІБ'} areaPlaceholder={'Введить текст оголошення'} selects={this.props.filterButtons} /> : null) : null}
          </div>
          <button className="section__open" onClick={this.onOpenForm}>
            {this.state.openForm ? 'Закрити форму' : 'Додати ' + this.openButtonName()}
          </button>
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
          <AdList id={this.props.id} ads={this.props.ads} numberAdsOfPages={this.props.numberAdsOfPages} />
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
};

export default Section;