import Service from 'shared/services/Service.js';
import { useParams } from 'react-router-dom';
import { isEmpty } from './isEmpty.jsx'
import { setVolunteersCategory } from './setVolunteersCategory.jsx'
import { removeHttpFromUrl } from "./removeHttpFromUrl";

import './volunteerСard.scss';
import { useState, useEffect } from "react";


const VolunteerCard = () => {

  const [volunteerPostObj, setVolunteerPostObj ] = useState ({
    cardId: "",
    name: "",
    phoneNumber: "",
    email: "",
    city: "",
    address: "",
    description: "",
    category: "",
    telegram: "",
    instagram: "",
    facebook: "",
    bankDetails: {
      fullBankName: "",
      shortBankName: "",
      iban: "",
      accountNumber: "",
      mfo: "",
      edrpo: "",
      cardNumber: "",
    }
  });

  const { id } = useParams();

  const  getVolunteerById = () => {
    const service = new Service();
    service
      .get(
        `${process.env.REACT_APP_API_URL}Volunteer/GetById?id=${id}`
      )
      .then((item) => {
        const volunteer = {
          cardId: isEmpty(item.id),
          select: setVolunteersCategory(item.category),
          name: isEmpty(item.name),
          telephone: isEmpty(item.phoneNumber),
          email: isEmpty(item.email),
          city: isEmpty(item.city),
          address: isEmpty(item.address),
          text: isEmpty(item.description),
          instagram: isEmpty(item.instagram),
          telegram: isEmpty(item.telegram),
          facebook: isEmpty(item.facebook),
          cardnumber: isEmpty(item.bankDetails?.cardNumber),
          fullbankname: isEmpty(item.bankDetails?.fullBankName),
          shortbankname: isEmpty(item.bankDetails?.shortBankName),
          mfo: isEmpty(item.bankDetails?.mfo),
          iban: isEmpty(item.bankDetails?.iban),
          edrpou: isEmpty(item.bankDetails?.edrpo),
          accountnumber: isEmpty(item.bankDetails?.accountNumber),
        };
        setVolunteerPostObj(volunteer);
      });
  };

  useEffect (() => {
      getVolunteerById();
    }, []
  );

  return (
    <>
      <div className="card__item">
        <div className="container">
          <div className="card__name">
            <p>{volunteerPostObj.name}</p>
            <p>{volunteerPostObj.select}</p>
          </div>
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
          
          <div className="card__information">
            <div className="card__image">
              <img className="card__image-style" src="https://static.ukrinform.com/photos/2017_10/1507935996-3775.jpg"/>
              <p className="card__text">{volunteerPostObj.text}</p>
            </div>
            <div>
              <div className="card__information-volontir">
                <div className="card__information-mini">
                  <p className="card__information-title">Особиста інформація</p>
                    <p className="card__contacts"><b>Телефон:</b> {volunteerPostObj.telephone}</p>
                    <p className="card__contacts"><b>Email:</b> {volunteerPostObj.email}</p>
                    <p className="card__contacts"><b>Місто:</b> {volunteerPostObj.city}</p>
                    <p className="card__contacts"><b>Адресса:</b> {volunteerPostObj.address}</p>
                    <p className="card__contacts"><b>Instagram: </b><a href={volunteerPostObj.instagram} target="_blank">{removeHttpFromUrl(volunteerPostObj.instagram)}</a></p>
                    <p className="card__contacts"><b>Telegram: </b><a href={volunteerPostObj.telegram} target="_blank">{removeHttpFromUrl(volunteerPostObj.telegram)}</a></p>
                    <p className="card__contacts"><b>Facebook: </b><a href={volunteerPostObj.facebook} target="_blank">{removeHttpFromUrl(volunteerPostObj.facebook)}</a></p>
                </div>
                <div className="card__information-mini">
                  <p className="card__information-title">Інформація банку</p>
                    <p className="card__contacts"><b>Номер картки:</b> {volunteerPostObj.cardnumber}</p>
                    <p className="card__contacts"><b>Повна назва банку:</b> {volunteerPostObj.fullbankname}</p>
                    <p className="card__contacts"><b>Скорочена назва банку:</b> {volunteerPostObj.shortbankname}</p>
                    <p className="card__contacts"><b>MFO:</b> {volunteerPostObj.mfo}</p>
                    <p className="card__contacts"><b>IBAN:</b> {volunteerPostObj.iban}</p>
                    <p className="card__contacts"><b>EDRPO:</b> {volunteerPostObj.edrpo}</p>
                    <p className="card__contacts"><b>PP:</b> {volunteerPostObj.accountNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
  }

  export default VolunteerCard;