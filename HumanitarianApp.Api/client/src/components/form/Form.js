import { Component } from 'react';

import Service from '../../services/Service';

import './form.scss';

class Form extends Component {
  postObj = {
    bankDetails: []
  };

  postService = new Service();

  // "bankDetails": [
  //   {
  //     "fullBankName": "string",
  //     "shortBankName": "string",
  //     "iban": "string",
  //     "accountNumber": "string",
  //     "mfo": "string",
  //     "edrpo": "string",
  //     "cardNumber": "string",
  //     "entityId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  //   }
  // ]

  onSubmit = e => {
    e.preventDefault();

    const json = JSON.stringify(this.postObj)

    this.postService.post('https://localhost:7057/api/Volunteer/CreateEntity', json)
    .then(response => console.log(response));

    this.postObj = {};
    e.target.reset();
  };

  onUpdateMainForm = e => {
    const key = e.target.name;
    let value = e.target.value;
    if (key === 'category') {
      value = +value;
    }
    this.postObj[key] = value;
  }

  onUpdateBankForm = e => {
    const key = e.target.name;
    const value = e.target.value;
    const obj = {};
    let flag = 'false';
    obj[key] = value;

    if (this.postObj.bankDetails.length > 0) {
      this.postObj.bankDetails.forEach((detail, i) => {
        if (Object.entries(detail)[0][0] === Object.entries(obj)[0][0]) {
          flag = i;
        }
      })
    }

    if (flag !== 'false') {
      this.postObj.bankDetails[flag] = obj;
      flag = false;
    } else {
      this.postObj.bankDetails.push(obj);
    }
  }

  render() {
    const {id, title, namePlaceholder, areaPlaceholder, selects} = this.props;

    return (
      <form className="form" action="#" onSubmit={e => this.onSubmit(e)}>
        <h2 className="subtitle">{title}</h2>
        <div className="form__inputs">
          <FormCategories selects={selects} onUpdateMainForm={this.onUpdateMainForm} />
          <input className="form__input" 
            name="name"
            type="text"
            required
            placeholder={'*' + namePlaceholder}
            onChange={e => this.onUpdateMainForm(e)} />
          <input className="form__input" 
            name="phoneNumber"
            type="number"
            inputMode='numeric'
            maxLength={25}
            required
            placeholder="*Телефон"
            onChange={e => this.onUpdateMainForm(e)} />
          <input className="form__input" 
            name="email"
            type="email"
            placeholder="Email-адреса..."
            onChange={e => this.onUpdateMainForm(e)} />
          <input className="form__input" 
            name="city"
            type="text"
            required
            placeholder="*Місто"
            onChange={e => this.onUpdateMainForm(e)} />
          <input className="form__input" 
            name="address"
            type="text"
            placeholder="Адреса"
            onChange={e => this.onUpdateMainForm(e)} />
        </div>
        {id === 0 ? <FormBankAccount onUpdateBankForm={this.onUpdateBankForm} /> : null}
        <textarea className="form__input form__input--services"
          name="description"
          maxLength={500}
          required
          placeholder={'*' + (areaPlaceholder || 'Напишіть, які послуги надаєте...')}
          onChange={e => this.onUpdateMainForm(e)} />
        <button className="form__button" type="submit">Додати</button>
      </form>
    );
  }
};

const FormCategories = ({selects, onUpdateMainForm}) => {
  const options = selects.map(select => {
    if (select.id !== 0) {
      return (
        <option key={select.id - 1} value={select.id - 1}>{select.name}</option>
      );
    }
  });

  if (selects.length !== 0) {
    return (
      <select className="form__input form__select" name="category" required onChange={e => onUpdateMainForm(e)}>
        <option value="">*Виберіть категорію</option>
        {options}
      </select>
    )
  }

  return null;
};

const FormBankAccount = ({onUpdateBankForm}) => {
  return (
    <div className="form__bank-block">
      <input className="form__input"
          name="cardNumber"
          type="text"
          minLength={16}
          maxLength={16}
          placeholder="Номер банківської картки"
          onChange={e => onUpdateBankForm(e)} />
      <p className="form__bank-data">Банківські реквізити</p>
      <div className="form__bank-account">
        <input className="form__input" 
          name="fullBankName"
          type="text"
          placeholder="Повне ім'я банку"
          onChange={e => onUpdateBankForm(e)} />
        <input className="form__input" 
          name="shortBankName"
          type="text"
          placeholder="Скорочене ім'я банку"
          onChange={e => onUpdateBankForm(e)} />
        <input className="form__input" 
          name="mfo"
          type="number"
          inputMode='numeric'
          minLength={6}
          maxLength={6}
          placeholder="МФО"
          onChange={e => onUpdateBankForm(e)} />
        <input className="form__input" 
          name="iban"
          type="number"
          inputMode='numeric'
          maxLength={31}
          placeholder="IBAN"
          onChange={e => onUpdateBankForm(e)} />
        <input className="form__input" 
          name="edrpo"
          type="number"
          inputMode='numeric'
          minLength={8}
          maxLength={10}
          placeholder="ІПН/ЄДРПОУ"
          onChange={e => onUpdateBankForm(e)} />
        <input className="form__input" 
          name="accountNumber"
          type="number"
          inputMode='numeric'
          placeholder="Розрахунковий рахунок"
          onChange={e => onUpdateBankForm(e)} />
      </div>
    </div>
  );
};

export default Form;