import { Component } from 'react';

import './adList.scss';

class AdList extends Component {
  keyCount = 0;

  createAdsElements = () => {
    const elements = this.props.ads.reverse().map(element => {
      const {select, name, telephone, email, city, address, text, cardnumber, fullbankname, shortbankname, mfo, iban, edrpou, accountnumber} = element;
      const {id} = this.props;

      return (
        <li key={this.keyCount++} className="ad-list__item">
          <h3 className="subtitle">{select || name} - {city}</h3>
          <p className="ad-list__text">{text}</p>
          <div className="ad-list__contacts">
            <p className="ad-list__contact"><span className="ad-list__bold">{id === 1 ? "Назва підприємства" : "Ім'я"}: </span>{name}</p>
            <p className="ad-list__contact"><span className="ad-list__bold">Телефон: </span>{telephone}</p>
            {email.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">Email: </span>{email}</p>: null}
            <p className="ad-list__contact"><span className="ad-list__bold">Адреса: </span>м. {city}{address.length > 0 ? `, ${address}` : ''}</p>
            {id === 0 && cardnumber.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">Номер картки: </span>{cardnumber}</p>: null}
            {id === 0 && fullbankname.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">Повна назва банку: </span>{fullbankname}</p>: null}
            {id === 0 && shortbankname.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">Скорочена назва банку: </span>{shortbankname}</p>: null}
            {id === 0 && mfo.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">МФО: </span>{mfo}</p>: null}
            {id === 0 && iban.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">IBAN: </span>{iban}</p>: null}
            {id === 0 && edrpou.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">{edrpou.length === 8 ? 'ЄДРПОУ' : 'ІПН'}: </span>{edrpou}</p>: null}
            {id === 0 && accountnumber.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">Розрахунковий рахунок: </span>{accountnumber}</p>: null}
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

const AdListBankData = () => {
  return (
    <>
      <p className="ad-list__contact"><span className="ad-list__bold">Номер картки: </span></p>
    </>
  );
};

export default AdList;