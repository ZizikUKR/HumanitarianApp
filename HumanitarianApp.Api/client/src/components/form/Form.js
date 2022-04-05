import { Component } from 'react';

import Service from '../../services/Service';

import './form.scss';

class Form extends Component {
  state = {
    activeSubmit: false
  }

  choiceUrl = () => {
    switch (this.props.id) {
      case 0:
        return 'https://localhost:7057/api/Volunteer/Create';
      case 1:
        return 'https://localhost:7057/api/Organization/Create';
      case 2:
        return 'https://localhost:7057/api/Announcement/Create';
    }
  }

  postObj = {
    name: '',
    phoneNumber: '',
    email: '',
    city: '',
    address: '',
    description: '',
    category: '',
    bankDetails: {
      fullBankName: '',
      shortBankName: '',
      iban: '',
      accountNumber: '',
      mfo: '',
      edrpo: '',
      cardNumber: ''
    }
  };  

  onActiveSubmit = () => {
    this.setState(({activeSubmit}) => ({
      activeSubmit: !activeSubmit
    }))
  }

  postService = new Service();

  onSubmit = e => {
    e.preventDefault();

    const json = JSON.stringify(this.postObj)

    this.postService.post(this.choiceUrl(), json)
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
    console.log(this.postObj);
  }

  onUpdateBankForm = e => {
    const key = e.target.name;
    const value = e.target.value;
    this.postObj.bankDetails[key] = value;
    console.log(this.postObj);
  }

  // onUpdateBankForm = e => {
  //   const key = e.target.name;
  //   const value = e.target.value;
  //   const obj = {};
  //   let flag = 'false';
  //   obj[key] = value;

  //   if (this.postObj.bankDetails.length > 0) {
  //     this.postObj.bankDetails.forEach((detail, i) => {
  //       if (Object.entries(detail)[0][0] === Object.entries(obj)[0][0]) {
  //         flag = i;
  //       }
  //     })
  //   }

  //   if (flag !== 'false') {
  //     this.postObj.bankDetails[flag] = obj;
  //     flag = false;
  //   } else {
  //     this.postObj.bankDetails.push(obj);
  //   }
  // }

  render() {
    const {id, title, namePlaceholder, areaPlaceholder, selects} = this.props;

    console.log(this.choiceUrl());

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
        <div className="form__submit">
          <div className="form__rules">
            <input
              className="form__checkbox"
              name="checkbox"
              required
              type="checkbox"
              onChange={this.onActiveSubmit} />
            <label className="form__checkbox-label">
              Я ознайомився з <span className="form__condition" onClick={() => this.props.onOpenAgreement()}>умовами</span> та погоджуюсь
            </label>
          </div>
          {this.state.activeSubmit ? <button className="form__button" type="submit">Додати</button> : null}
        </div>
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