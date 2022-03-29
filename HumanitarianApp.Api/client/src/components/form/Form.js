import './form.scss';

const Form = ({namePlaceholder, areaPlaceholder, selects}) => {
  const onSubmit = e => {
    e.preventDefault();
    console.log('Submit is ok!');
    e.target.reset();
  };

  return (
    <form className="form" action="#" onSubmit={e => onSubmit(e)}>
      <div className="form__inputs">
        <Categories selects={selects} />
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
          placeholder="*Телефон..." />
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
          placeholder="Адреса..." />
      </div>
      <textarea className="form__input form__input--services"
        name="services"
        maxLength={500}
        required
        placeholder={'*' + (areaPlaceholder || 'Напишіть, які послуги надаєте...')} />
      <button className="form__button" type="submit">Додати</button>
    </form>
  );
};

const Categories = ({selects}) => {
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

const BankAccount = () => {
  return (
    <select className="form__input form__select" name="bank">
      <option value="0">Номер банківської картки</option>
      <option value="1">Номер банківського рахунку</option>
    </select>
  );
};

export default Form;