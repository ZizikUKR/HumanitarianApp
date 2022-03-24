import './popUp.scss';

const PopUp = ({title, namePlaceholder, closePopUp, areaPlaceholder, selects}) => {
  const onSubmit = e => {
    e.preventDefault();
    console.log('Submit is ok!');
    e.target.reset();
  };

  const options = selects.map(select => {
    if (select.id !== 0) {
      return (
        <option key={select.id - 1} value={select.id - 1}>{select.name}</option>
      );
    }
  });

  const selectList = () => {
    if (selects.length !== 0) {
      return (
        <select className="pop-up__input pop-up__select" name="select" required>
          <option value="">*Виберіть категорію</option>
          {options}
        </select>
      )
    }
  };

  return (
    <div className="pop-up">
      <div className="pop-up__wrapper">
        <button className="pop-up__close" onClick={closePopUp}>&times;</button>
        <h2 className="subtitle">{title}</h2>
        <form className="pop-up__form" action="#" onSubmit={e => onSubmit(e)}>
          {selectList()}
          <input className="pop-up__input" 
            name="name"
            type="text"
            required
            placeholder={'*' + namePlaceholder} />
          <input className="pop-up__input" 
            name="telephone"
            type="number"
            inputMode='numeric'
            maxLength={25}
            required
            placeholder="*Телефон..." />
          <input className="pop-up__input" 
            name="email"
            type="email"
            placeholder="Email-адреса..." />
          <input className="pop-up__input" 
            name="city"
            type="text"
            required
            placeholder="*Місто" />
          <input className="pop-up__input" 
            name="address"
            type="text"
            placeholder="Адреса..." />
          <textarea className="pop-up__input pop-up__input--services"
            name="services"
            maxLength={500}
            required
            placeholder={'*' + (areaPlaceholder || 'Напишіть, які послуги надаєте...')} />
          <button className="pop-up__button" type="submit">Додати</button>
        </form>
      </div>
      <div className="pop-up__overlay" onClick={closePopUp}></div>
    </div>
  );
}

export default PopUp;