import { Component } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hook/useAuth";

import Service from '../../services/Service';

import './adminPanel.scss';

export default class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerButtons: [
        {id: 0, name: 'Волонтери'},
        {id: 1, name: 'Підприємства'},
        {id: 2, name: 'Оголошення'},
      ],
      activeSection: 0,
      sectionsData: [
        {
          id: 0,
          name: 'Волонтери',
          ads: [
            {
              "select": "Перевезення",
              "name": "Петров Іван Сергійович",
              "telephone": "+38099112233",
              "email": "petrov@qwerty.com",
              "city": "Київ",
              "address": "м. Перемоги, 1",
              "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas.",
              "cardnumber": "12345678901234",
              "fullbankname": "GgggMmmmBbbbHhhh Bank",
              "shortbankname": "GMBH Bank",
              "mfo": "8465",
              "iban": "2546542544",
              "edrpou": "12345678",
              "accountnumber": "484654654465454845"
            },
            {
              "select": "Гуманітарна допомога",
              "name": "Петров Александр Васильович",
              "telephone": "+380687778899",
              "email": "",
              "city": "Днепр",
              "address": "",
              "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam architecto numquam aliquam quas aspernatur voluptatibus harum non cumque excepturi? Nesciunt reiciendis, autem deleniti debitis asperiores nulla ipsa sapiente doloribus officiis.",
              "cardnumber": "43219876543210",
              "fullbankname": "",
              "shortbankname": "",
              "mfo": "8465",
              "iban": "2546542544",
              "edrpou": "0123456789",
              "accountnumber": "484654654465454845"
            },
            {
              "select": "Медицина",
              "name": "Дубровський Георгій В'ячеславович",
              "telephone": "+380633211221",
              "email": "heorhii@qwerty.com",
              "city": "Хмельницький",
              "address": "мм. Квітневий, 27/80",
              "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam architecto numquam aliquam quas aspernatur voluptatibus harum non cumque excepturi? Nesciunt reiciendis, autem deleniti debitis asperiores nulla ipsa sapiente doloribus officiisa nulla ipsa sapiente doloribus officiis qwertyuiopas.",
              "cardnumber": "12345678",
              "fullbankname": "йфяцічувскамепинртгоьшлбщд",
              "shortbankname": "йфяцічусскам",
              "mfo": "123456566654546",
              "iban": "64654654465465465465",
              "edrpou": "0123456789",
              "accountnumber": "апу65+5+65ппукпук5п565пку546"
            }
          ]
        },
        {
          id: 1,
          name: 'Підприємства',
          ads: [
            {
              "name": "Фірма",
              "telephone": "+380674445566",
              "email": "firma@qwerty.com",
              "city": "Львів",
              "address": "",
              "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit ipsum neque. Tempore totam velit veniam eius a deleniti excepturi tenetur unde alias sunt quia aliquid, placeat aperiam odio voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam architecto numquam aliquam quas aspernatur voluptatibus harum non cumque excepturi?."
            }
          ]
        },
        {
          id: 2,
          name: 'Оголошення',
          ads: []
        }
      ]
    }
  }

  selectSection = (id) => {
    this.setState({
      activeSection: id
    })
  }

  renderSection = (section) => {
    const {id, name, ads} = section;

    return(
      <AdminPanelSection
        key={id}
        name={name}
        ads={ads}
        activeSection={this.state.activeSection}
        id={id} />
    );
  }

  service = new Service();
  componentDidMount() {
    this.getAllVolunteers();
    this.getAllOrganizations();
    this.getAllAnnouncements();
  }

  getAllVolunteers = () => {
    this.service
      .get("https://localhost:7057/api/Volunteer/GetAllActive?pageNumber=1")
      .then((response) => {
        const volonteers = response.map((item) => {
          return {
            select: this.setVolunteersCategory(item.category),
            name: this.isEmpty(item.name),
            telephone: this.isEmpty(item.phoneNumber),
            email: this.isEmpty(item.email),
            city: this.isEmpty(item.city),
            address: this.isEmpty(item.address),
            text: this.isEmpty(item.description),
            cardnumber: this.isEmpty(item.bankDetails?.cardNumber),
            fullbankname: this.isEmpty(item.bankDetails?.fullBankName),
            shortbankname: this.isEmpty(item.bankDetails?.shortBankName),
            mfo: this.isEmpty(item.bankDetails?.mfo),
            iban: this.isEmpty(item.bankDetails?.iban),
            edrpou: this.isEmpty(item.bankDetails?.edrpo),
            accountnumber: this.isEmpty(item.bankDetails?.accountNumber),
          };
        });
        let newsectionsData = Object.assign({}, this.state.sectionsData);
        newsectionsData[0].ads = volonteers;

        this.setState({ sectionsData: newsectionsData });
      });

      
  };

  isEmpty = (inputStr) => {
    if (inputStr) {
      return inputStr;
    }
    return "";
  }

  getAllOrganizations = () => {
    this.service
      .get("https://localhost:7057/api/Organization/GetAllActive?pageNumber=1")
      .then((response) => {
        const organizations = response.map((item) => {
          return {
            name: this.isEmpty(item.name),
            telephone: this.isEmpty(item.phoneNumber),
            email: this.isEmpty(item.email),
            city: this.isEmpty(item.city),
            address: this.isEmpty(item.address),
            text: this.isEmpty(item.description),
          };
        });

        let newsectionsData = Object.assign({}, this.state.sectionsData);
        newsectionsData[1].ads = organizations;

        this.setState({ sectionsData: newsectionsData });
      });
  };

  getAllAnnouncements = () => {
    this.service
      .get("https://localhost:7057/api/Announcement/GetAllActive?pageNumber=1")
      .then((response) => {
        const announcements = response.map((item) => {
          return {
            select: this.setAnnouncementCategory(item.category),
            name: this.isEmpty(item.name),
            telephone: this.isEmpty(item.phoneNumber),
            email: this.isEmpty(item.email),
            city: this.isEmpty(item.city),
            address: this.isEmpty(item.address),
            text: this.isEmpty(item.description),
          };
        });
        

        let newsectionsData = Object.assign({}, this.state.sectionsData);
        newsectionsData[2].ads = announcements;

        this.setState({ sectionsData: newsectionsData });
      });
  };

  setVolunteersCategory = (category) => {
    if (category == 1) {
      return "Перевезення";
    }

    if (category == 2) {
      return "Медицина";
    }

    if (category == 3) {
      return "Гуманітарна допомога";
    }

    if (category == 4) {
      return "Інше";
    }

    return "";
  };

  setAnnouncementCategory = (category) => {
    if (category == 0) {
      return "Шукаю";
    }

    if (category == 1) {
      return "Знайшов";
    }

    if (category == 2) {
      return "Продам";
    }

    if (category == 3) {
      return "Придбаю";
    }

    if (category == 4) {
      return "Вiддам";
    }

    if (category == 5) {
      return "Прийму";
    }

    if (category == 6) {
      return "Iнше";
    }

    return "";
  };

  render() {
    const {headerButtons, sectionsData, activeSection} = this.state;
    
    return (
      <>
        <AdminPanelHeader
          headerButtons={headerButtons}
          activeSection={this.state.activeSection}
          selectSection={this.selectSection}
        />
        <main>
          {this.renderSection(sectionsData[activeSection])}
        </main>
      </>
    );
  }
};

const AdminPanelHeader = ({headerButtons, activeSection, selectSection}) => {
  const {signout} = useAuth();
  const navigate = useNavigate();

  function HeaderButton({headerButtons, activeSection, selectSection}) {
    const buttons = headerButtons.map(item => {
      const clazz = activeSection === item.id ? 'admin-header__button admin-header__button--active' : 'admin-header__button';
  
      return (
        <button className={clazz} type='button' key={item.id} onClick={() => {selectSection(item.id)}}>{item.name}</button>
      );
    });
  
    return buttons;
  }

  return (
    <header className="admin-header">
      <div className="container">
        <div className="admin-header__wrapper">
          <div className="admin-header__buttons">
            <HeaderButton headerButtons={headerButtons} activeSection={activeSection} selectSection={selectSection} />
          </div>
          <button className="admin-header__button admin-header__button--exit" onClick={() => signout(() => navigate('/admin-login', {replace: true}))}>Log Out</button>
        </div>
      </div>
    </header>
  );
};

const AdminPanelSection = ({name, ads, id, numberAdsOfPages}) => {
  return(
    <section className="admin-section">
      <div className="admin-section__info">
        <div className="container">
          <div className="admin-section__wrapper">
            <h2 className="subtitle subtitle--black">{name}: {ads.length}</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <AdminPanelAdList id={id} ads={ads} numberAdsOfPages={numberAdsOfPages} />
      </div>
    </section>
  );
};

const AdminPanelAdList = (props) => {
  let keyCount = 0;

  const elements = props.ads.reverse().map(element => {
    const {select, name, telephone, email, city, address, text, cardnumber, fullbankname, shortbankname, mfo, iban, edrpou, accountnumber} = element;
    const {id} = props;
    
    return (
      <div key={keyCount++} className="admin-ad-list__item">
        <h3 className="subtitle">{select || name} - {city}</h3>
        <p className="admin-ad-list__text">{text}</p>
        <div className="admin-ad-list__contacts">
          <p className="admin-ad-list__contact"><span className="admin-ad-list__bold">{id === 1 ? "Назва підприємства" : "Ім'я"}: </span>{name}</p>
          <p className="admin-ad-list__contact"><span className="admin-ad-list__bold">Телефон: </span>{telephone}</p>
          {email.length > 0 ? <p className="admin-ad-list__contact"><span className="admin-ad-list__bold">Email: </span>{email}</p>: null}
          <p className="admin-ad-list__contact"><span className="admin-ad-list__bold">Адреса: </span>м. {city}{ address.length > 0 ? `, ${address}` : ''}</p>
          {id === 0 && cardnumber.length > 0 ? <p className="admin-ad-list__contact"><span className="admin-ad-list__bold">Номер картки: </span>{cardnumber}</p>: null}
          {id === 0 && fullbankname.length > 0 ? <p className="admin-ad-list__contact"><span className="admin-ad-list__bold">Повна назва банку: </span>{fullbankname}</p>: null}
          {id === 0 && shortbankname.length > 0 ? <p className="admin-ad-list__contact"><span className="admin-ad-list__bold">Скорочена назва банку: </span>{shortbankname}</p>: null}
          {id === 0 && mfo.length > 0 ? <p className="admin-ad-list__contact"><span className="admin-ad-list__bold">МФО: </span>{mfo}</p>: null}
          {id === 0 && iban.length > 0 ? <p className="admin-ad-list__contact"><span className="admin-ad-list__bold">IBAN: </span>{iban}</p>: null}
          {id === 0 && edrpou.length > 0 ? <p className="admin-ad-list__contact"><span className="admin-ad-list__bold">{edrpou.length === 8 ? 'ЄДРПОУ' : 'ІПН'}: </span>{edrpou}</p>: null}
          {id === 0 && accountnumber.length > 0 ? <p className="admin-ad-list__contact"><span className="admin-ad-list__bold">Розрахунковий рахунок: </span>{accountnumber}</p>: null}
        </div>
      </div>
    )
  });

  return (
    <ul className="admin-ad-list">
      {elements}
    </ul>
  );
}