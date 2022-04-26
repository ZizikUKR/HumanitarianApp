import { Component } from "react";
import Service from "../../services/Service";
import {isEmpty} from "./isEmpty.jsx";
import {setVolunteersCategory} from "./setVolunteersCategory.jsx";
import AdList from "../ad-list/AdList";

import './card.scss';


export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volunteerPostObj: {
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
        },
      },
    };
  } 

  getVolunteerById = (cardId) => {
    this.service
      .get(
        `${process.env.REACT_APP_API_URL}Volunteer/GetById?id=${cardId}`
      )
      .then((item) => {
        const volonteer = {
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
        this.setState({ volunteerPostObj: volonteer });
      });
  };

  service = new Service();
  componentDidMount() {
    this.getVolunteerById();
  }

  render() {
    return (
      <>
        <div className="card__item">
          <div className="container">
            <div className="card__name">{this.state.volunteerPostObj.name} - {this.state.volunteerPostObj.category}</div>
            <div className="card__information">
              <div className="card__text">{this.state.volunteerPostObj.text}</div>
              <div className="card__contacts">{this.state.volunteerPostObj.telephone}</div>
              <div className="card__contacts">{this.state.volunteerPostObj.email}</div>
              <div className="card__contacts">{this.state.volunteerPostObj.city}</div>
              <div className="card__contacts">{this.state.volunteerPostObj.address}</div>
              <div className="card__contacts">{this.state.volunteerPostObj.instagram}</div>
              <div className="card__contacts">{this.state.volunteerPostObj.telegram}</div>
              <div className="card__contacts">{this.state.volunteerPostObj.facebook}</div>
              <div className="card__contacts">{this.state.volunteerPostObj.cardnumber}</div>
              <div className="card__contacts">{this.state.volunteerPostObj.fullbankname}</div>
              <div className="card__contacts">{this.state.volunteerPostObj.shortbankname}</div>
              <div className="card__contacts">{this.state.volunteerPostObj.mfo}</div>
              <div className="card__contacts">{this.state.volunteerPostObj.iban}</div>
              <div className="card__contacts">{this.state.volunteerPostObj.edrpo}</div>
              <div className="card__contacts">{this.state.volunteerPostObj.accountNumber}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
