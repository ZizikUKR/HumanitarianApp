import Service from "shared/services/Service";
import { useParams } from "react-router-dom";
import { isEmpty } from "../volunteer-card/isEmpty";
import { removeHttpFromUrl } from "../volunteer-card/removeHttpFromUrl";
import { useState, useEffect } from "react";

import './organizationCard.scss';



const OrganizationCard = () => {

  const [organizationPostObj, setOrganizationPostObj ] = useState ({
    cardId: '',
    name: '',
    telephone: '',
    email: '',
    city: '',
    address: '',
    webSite: '',
    text: '',
  });

  const { id } = useParams();

  const  getOrganization = () => {
    const service = new Service();
    service
      .get(
        `${process.env.REACT_APP_API_URL}Organization/GetById?id=${id}`
      )
      .then((item) => {
        const organization = {
            cardId: isEmpty(item.id),
            name: isEmpty(item.name),
            telephone: isEmpty(item.phoneNumber),
            email: isEmpty(item.email),
            city: isEmpty(item.city),
            address: isEmpty(item.address),
            text: isEmpty(item.description),
            webSite: isEmpty(item.webSite),
        };
        setOrganizationPostObj(organization);
      });
  };

  useEffect (() => {
    getOrganization();
    }, []
  );

  return (
    <>
      <div className="card__item">
        <div className="container">
          <div className="card__name">
            <p>{organizationPostObj.name}</p>
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
              <img className="card__image-style" src="https://wise.com/imaginary/d61e9991c286e163a09402cdc3c603ea.jpg?width=1200"/>
              <div className="card__information-mini">
                  <p className="card__information-title">Інформація про оргонізацію: </p>
                    <p className="card__contacts"><b>Телефон:</b> {organizationPostObj.telephone}</p>
                    <p className="card__contacts"><b>Email:</b> {organizationPostObj.email}</p>
                    <p className="card__contacts"><b>Місто:</b> {organizationPostObj.city}</p>
                    <p className="card__contacts"><b>Адресса:</b> {organizationPostObj.address}</p>
                    <p className="card__contacts"><b>WebSite: </b><a href={organizationPostObj.webSite} target="_blank">{removeHttpFromUrl(organizationPostObj.webSite)}</a></p>
                </div>  
            </div>
            <div>
              <div className="card__information-volontir">
              <p className="card__text">{organizationPostObj.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
  }

  export default OrganizationCard;