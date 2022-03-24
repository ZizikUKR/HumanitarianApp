import { Component } from 'react';

import './adList.scss';

class AdList extends Component {
  keyCount = 0;

  createAdsElements = () => {
    const elements = this.props.ads.map(element => {
      const {select, name, telephone, email, city, address, text} = element;

      return (
        <li key={this.keyCount++} className="ad-list__item">
          <h3 className="subtitle">{select || name}</h3>
          <p className="ad-list__text">{text}</p>
          <div className="ad-list__contacts">
            <p className="ad-list__contact"><span className="ad-list__bold">Телефон: </span>{telephone}</p>
            <p className="ad-list__contact"><span className="ad-list__bold">Email: </span>{email}</p>
            <p className="ad-list__contact"><span className="ad-list__bold">Адреса: </span>м. {city}{address.length > 0 ? `, ${address}` : ''}</p>
          </div>
        </li>
      )
    });

    return elements;
  }

  render() {
    return (
      <ul className="ad-list">
        {this.createAdsElements()}
      </ul>
    );
  }
};

export default AdList;