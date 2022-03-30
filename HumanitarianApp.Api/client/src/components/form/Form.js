import './form.scss';

const Form = ({id, title, namePlaceholder, areaPlaceholder, selects}) => {
  const onSubmit = e => {
    e.preventDefault();
    console.log('Submit is ok!');
    e.target.reset();
  };

  return (
    <form className="form" action="#" onSubmit={e => onSubmit(e)}>
      <h2 className="subtitle">{title}</h2>
      <div className="form__inputs">
        <FormCategories selects={selects} />
        <input className="form__input" 
          name="name"
          type="text"
          required
          placeholder={'*' + namePlaceholder} />
        <input className="form__input" 
          name="telephone"
          type="number"
          inputMode='numeric'
          maxLength={25}
          required
          placeholder="*Телефон" />
        <input className="form__input" 
          name="email"
          type="email"
          placeholder="Email-адреса..." />
        <input className="form__input" 
          name="city"
          type="text"
          required
          placeholder="*Місто" />
        <input className="form__input" 
          name="address"
          type="text"
          placeholder="Адреса" />
      </div>
      {id === 0 ? <FormBankAccount /> : null}
      <textarea className="form__input form__input--services"
        name="services"
        maxLength={500}
        required
        placeholder={'*' + (areaPlaceholder || 'Напишіть, які послуги надаєте...')} />
      <button className="form__button" type="submit">Додати</button>
    </form>
  );
};

const FormCategories = ({selects}) => {
  const options = selects.map(select => {
    if (select.id !== 0) {
      return (
        <option key={select.id - 1} value={select.id - 1}>{select.name}</option>
      );
    }
  });

  if (selects.length !== 0) {
    return (
      <select className="form__input form__select" name="categories" required>
        <option value="">*Виберіть категорію</option>
        {options}
      </select>
    )
  }

  return null;
};

const FormBankAccount = () => {
  return (
    <div className="form__bank-block">
      <input className="form__input"
          name="cardnumber"
          type="text"
          minLength={16}
          maxLength={16}
          placeholder="Номер банківської картки" />
      <p className="form__bank-data">Банківські реквізити</p>
      <div className="form__bank-account">
        <input className="form__input" 
          name="fullbankname"
          type="text"
          placeholder="Повне ім'я банку" />
        <input className="form__input" 
          name="shortbankname"
          type="text"
          placeholder="Скорочене ім'я банку" />
        <input className="form__input" 
          name="mfo"
          type="number"
          inputMode='numeric'
          minLength={6}
          maxLength={6}
          placeholder="МФО" />
        <input className="form__input" 
          name="iban"
          type="number"
          inputMode='numeric'
          maxLength={31}
          placeholder="IBAN" />
        <input className="form__input" 
          name="edrpou"
          type="number"
          inputMode='numeric'
          minLength={8}
          maxLength={10}
          placeholder="ІПН/ЄДРПОУ" />
        <input className="form__input" 
          name="accountnumber"
          type="number"
          inputMode='numeric'
          placeholder="Розрахунковий рахунок" />
      </div>
    </div>
  );
};

export default Form;