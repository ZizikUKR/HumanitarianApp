import { Component } from 'react';

import AdList from '../ad-list/AdList';

import './section.scss';

class Section extends Component {
  state = {
    activeButton: 0,
    openAdList: false,
    searchValue: ''
  }
  
  createButtons = () => {
    const buttons = this.props.filterButtons.map(button => {
      const {id, name} = button;
      
      const active = this.props.filter === name;
      const clazz = active ? 'section__button--active' : '';
  
      return (
        <button className={`section__button ${clazz}`} key={id} onClick={() => this.props.onFilterSelect(name)}>{name}</button>
      );
    });

    return buttons;
  }

  changeActiveButton = (id) => {
    this.setState({
      activeButton: id
    });
  }

  onOpenSection = () => {
    this.setState({
      openAdList: !this.state.openAdList
    });
  }

  onUpdateSearch = e => {
    const searchValue = e.target.value;
    this.setState({searchValue});
    this.props.onUpdateSearch(searchValue)
  }

  render() {
    return(
      <section className="section">
        <div className="section__info">
          <div className="container">
            <div className="section__wrapper">
              <div className="section__block">
                <h2 className="subtitle--white">{this.props.name}</h2>
                <input
                  className="section__search"
                  type="text"
                  placeholder="Пошук за містом..."
                  value={this.state.searchResult}
                  onChange={(e) => this.onUpdateSearch(e)} />
              </div>
              <div className="section__buttons">
                {this.createButtons()}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {this.state.openAdList ? <AdList ads={this.props.ads} /> : null}
        </div>
        <div className="section__open" onClick={this.onOpenSection}>
          <span className="section__open-line"></span>
          <span className="section__open-line"></span>
          <span className="section__open-line"></span>
        </div>
      </section>
    );
  }
};

export default Section;