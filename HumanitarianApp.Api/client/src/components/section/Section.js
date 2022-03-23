

import './section.scss';

const Section = ({name, filterButtons}) => {
  const buttons = filterButtons.map(filter => {
    const {id, name, active} = filter;

    const clazz = active ? 'section__button--active' : null;

    return (
      <button className={`section__button + ${clazz}`} key={id} onClick={() => console.log(filterButtons)}>{name}</button>
    );
  });

  return(
    <section className="section">
      <div className="container">
        <div className="section__wrapper">
          <h2 className="subtitle--white">{name}</h2>
          <div className="section__buttons">
            {buttons}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;