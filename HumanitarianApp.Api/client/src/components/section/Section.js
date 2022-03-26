import { Component } from 'react';

import AdList from '../ad-list/AdList';

import './section.scss';

class Section extends Component {
  state = {
    searchValue: ''
  }
  
  createCategories = () => {
    const categories = this.props.filterButtons.map(button => {
      const {id, name} = button;
  
      return (
        <option key={id} value={name}>{name}</option>
      );
    });

    const selectCategories = <select className="section__categories" onChange={(e) => this.props.onFilterSelect(e.target.value)}>{categories}</select>;
    
    if (selectCategories.props.children.length === 0) {
      return null;
    } else {
      return selectCategories;
    }
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
              <h2 className="subtitle subtitle--white">{this.props.name}</h2>
              <div className="section__filters">
                {this.createCategories()}
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