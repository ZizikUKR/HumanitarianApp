import { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

import leftArrow from '../../assets/icons/slider-icons/left_arrow.svg';
import rightArrow from '../../assets/icons/slider-icons/right_arrow.svg';

import './adList.scss';
import './carousel.scss';

class AdList extends Component {
  keyCount = 0;
  adsBlocks = [];

  createAdsElements = () => {
    const elements = this.props.ads.reverse().map(element => {
      const {cardId, select, name, telephone, email, city, address, text, webSite, cardnumber, fullbankname, shortbankname, mfo, iban, edrpou, accountnumber, instagram, telegram, facebook} = element;
      const {id} = this.props;
      return (
        <div key={this.keyCount++} className="ad-list__item">
          {id === 0  ? <div className="subtitle"><Link to={`/volunteer/${cardId}`}>{select || name} - {city}</Link></div> : null}
          {id === 1  ? <div className="subtitle"><Link to={`/organization/${cardId}`}>{select || name} - {city}</Link></div> : null}
          <ul className='ad-list__share'>
            <li>
              <a className="ad-list__share-link ad-list__share-link--fb" href="#">
                <span>Поділитися:</span>
              </a>
            </li>
            <li>
              <a className="ad-list__share-link ad-list__share-link--telegram" href="#">
                <span>Поділитися:</span>
              </a>
            </li>
            <li>
              <a className="ad-list__share-link ad-list__share-link--instagram" href="#">
                <span>Поділитися:</span>
              </a>
            </li>
          </ul>
          <p className="ad-list__text">{text}</p>          
          <div className="ad-list__contacts">
            <p className="ad-list__contact"><span className="ad-list__bold">{id === 1 ? "Назва підприємства" : "Ім'я"}: </span>{name}</p>
            {id === 1 && webSite.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">WebSite: </span><a href={webSite} target="_blank">{this.removeHttpFromUrl(webSite)}</a></p> : null}
            <p className="ad-list__contact"><span className="ad-list__bold">Телефон: </span>{telephone}</p>
            {id === 0 && instagram.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">Instagram: </span><a href={instagram} target="_blank">{this.removeHttpFromUrl(instagram)}</a></p>: null}
            {id === 0 && telegram.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">Telegram: </span><a href={telegram} target="_blank">{this.removeHttpFromUrl(telegram)}</a></p>: null}
            {id === 0 && facebook.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">Facebook: </span><a href={facebook} target="_blank">{this.removeHttpFromUrl(facebook)}</a></p>: null}
            {email.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">Email: </span>{email}</p>: null}
            <p className="ad-list__contact"><span className="ad-list__bold">Адреса: </span>м. {city}{ address.length > 0 ? `, ${address}` : ''}</p>
            {id === 0 && cardnumber.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">Номер картки: </span>{cardnumber}</p>: null}
            {id === 0 && fullbankname.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">Повна назва банку: </span>{fullbankname}</p>: null}
            {id === 0 && shortbankname.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">Скорочена назва банку: </span>{shortbankname}</p>: null}
            {id === 0 && mfo.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">МФО: </span>{mfo}</p>: null}
            {id === 0 && iban.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">IBAN: </span>{iban}</p>: null}
            {id === 0 && edrpou.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">{edrpou.length === 8 ? 'ЄДРПОУ' : 'ІПН'}: </span>{edrpou}</p>: null}
            {id === 0 && accountnumber.length > 0 ? <p className="ad-list__contact"><span className="ad-list__bold">Розрахунковий рахунок: </span>{accountnumber}</p>: null}
          </div>
        </div>
      )
    });
  
    return elements;
  }

  removeHttpFromUrl = (url) => {
    const site = url;

    const newSite = site.split('https://')[1];

    return newSite
  }

  createElementsPages = () => {
    this.adsBlocks = [];
    let afterArray = this.createAdsElements();
    let array = [];
    let numberAdsOnPages = 10;
    let count = 0;

    afterArray.forEach((element, i) => {
      if (i % numberAdsOnPages === 0) {
        for (let i = 0; i < afterArray.length; i++) {
          array.push(afterArray[count])
          count++;
          if (array.length % numberAdsOnPages === 0) {
            break;
          };
        }
        this.adsBlocks.push(array);
        array = [];
      }
    });
  }

  renderPages = () => {
    this.createElementsPages();
    
    const blocks = this.adsBlocks.map((block, i) => {
      return (
        <div key={i} className="ad-list__block">
          {block}
        </div>
      );
    });

    return blocks;
  }

  render() {
    return (
      <Carousel
        showThumbs={false}
        showIndicators={false}
        dynamicHeight={true}
        swipeable={false}
        statusFormatter={(current, total) => `Стор. ${current} - ${total}`}
        renderArrowPrev={(onClickHandler, hasPrev, label) => hasPrev && (
            <button className="ad-list__carousel-button ad-list__carousel-button--prev" type="button" onClick={onClickHandler} title={label}>
              <img src={leftArrow} alt="Arrow left" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) => hasNext && (
            <button className="ad-list__carousel-button ad-list__carousel-button--next" type="button" onClick={onClickHandler} title={label}>
              <img src={rightArrow} alt="Arrow right" />
            </button>
          )
        }>
        {this.renderPages()}
      </Carousel>
    );
  }
};

export default AdList;