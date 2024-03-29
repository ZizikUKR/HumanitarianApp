import {Component} from "react"
import Service from "../../services/Service";
import "./form.scss";
import {showInfo} from "../../toast/notification";

//TODO: It is better to have one component in the file, max two component
//TODO: Change file type to typescript, transform class in function component
//TODO: Make components for each case
//TODO: If you want, i can add validation (for this task you can use Formik and yup lib)
class Form extends Component {
    state = {
        activeSubmit: false,
    };

    volunteerPostObj = {
        name: '',
        phoneNumber: '',
        email: '',
        city: '',
        address: '',
        description: '',
        category: '',
        telegram: '',
        instagram: '',
        facebook: '',
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

    organizationPostObj = {
        name: '',
        telephone: '',
        email: '',
        city: '',
        address: '',
        webSite: '',
        text: ''
    }

    announcementPostObj = {
        select: '',
        name: '',
        telephone: '',
        email: '',
        city: '',
        address: '',
        text: ''
    }

    onActiveSubmit = () => {
        this.setState(({activeSubmit}) => ({
            activeSubmit: !activeSubmit,
        }));
    };

    choiceUrl = () => {
        switch (this.props.id) {
            case 0:
                return `${process.env.REACT_APP_API_URL}Volunteer/Create`;
            case 1:
                return `${process.env.REACT_APP_API_URL}Organization/Create`;
            case 2:
                return `${process.env.REACT_APP_API_URL}Announcement/Create`;
        }
    }

    choicePostObj = () => {
        switch (this.props.id) {
            case 0:
                return this.volunteerPostObj;
            case 1:
                return this.organizationPostObj;
            case 2:
                return this.announcementPostObj;
        }
    }

    postService = new Service();
    onSubmit = (e) => {
        e.preventDefault();
        const json = JSON.stringify(this.choicePostObj());

        this.postService.post(this.choiceUrl(), json).then(() => {
            showInfo(`Ваша заявка на створення ${this.getName()} була прийнята!`);
        });

        this.postObj = {};
        e.target.reset();
    };

    getName = () => {
        switch (this.props.id) {
            case 0:
                return "волонтера";
            case 1:
                return "організації";
            case 2:
                return "підприємства";
        }
    }

    onUpdateMainForm = (e) => {
        const key = e.target.name;
        let value = e.target.value;
        if (key === "category") {
            value = +value;
        }

        this.choicePostObj()[key] = value;
        console.log(this.choicePostObj());
    }

    onUpdateBankForm = (e) => {
        const key = e.target.name;
        this.choicePostObj().bankDetails[key] = e.target.value;
        console.log(this.volunteerPostObj);
    }

    render() {
        const {id, title, namePlaceholder, areaPlaceholder, selects} = this.props;

        return (
            <form className="form" action="#" onSubmit={e => {
                this.onSubmit(e);
                this.onActiveSubmit()
            }}>
                <h2 className="subtitle">{title}</h2>
                <div className="form__inputs">
                    <FormCategories
                        selects={selects}
                        onUpdateMainForm={this.onUpdateMainForm}/>
                    <input
                        className="form__input"
                        name="name"
                        type="text"
                        required
                        placeholder={"*" + namePlaceholder}
                        onChange={(e) => this.onUpdateMainForm(e)}/>
                    <input
                        className="form__input"
                        name="phoneNumber"
                        type="number"
                        inputMode="numeric"
                        maxLength={25}
                        required
                        placeholder="*Телефон"
                        onChange={(e) => this.onUpdateMainForm(e)}/>
                    <input
                        className="form__input"
                        name="email"
                        type="email"
                        placeholder="Email-адреса..."
                        onChange={(e) => this.onUpdateMainForm(e)}/>
                    <input
                        className="form__input"
                        name="city"
                        type="text"
                        required
                        placeholder="*Місто"
                        onChange={(e) => this.onUpdateMainForm(e)}/>
                    <input
                        className="form__input"
                        name="address"
                        type="text"
                        placeholder="Адреса"
                        onChange={(e) => this.onUpdateMainForm(e)}/>
                    {id === 1 ?
                        <input
                            className="form__input"
                            name="webSite"
                            type="url"
                            placeholder="Website"
                            onChange={(e) => this.onUpdateMainForm(e)}/>
                        : null}
                    {id === 0 ? <FormSocialMedia onUpdateMainForm={this.onUpdateMainForm}/> : null}
                    {id === 0 ?
                        <input
                            className="form__input"
                            name="cardNumber"
                            type="number"
                            inputMode="numeric"
                            min="16"
                            max="16"
                            placeholder="Номер банківської картки"
                            onChange={e => this.onUpdateBankForm(e)}/>
                        : null}
                    {id === 0 ? <FormBankAccount onUpdateBankForm={this.onUpdateBankForm}/> : null}
                </div>
                <textarea
                    className="form__input form__input--services"
                    name="description"
                    maxLength={500}
                    required
                    placeholder={"*" + (areaPlaceholder || "Напишіть, які послуги надаєте...")}
                    onChange={(e) => this.onUpdateMainForm(e)}/>
                <div className="form__submit">
                    <div className="form__rules">
                        <input
                            className="form__checkbox"
                            name="checkbox"
                            required
                            type="checkbox"
                            onChange={this.onActiveSubmit}/>
                        <label className="form__checkbox-label">
                            Я ознайомився з <span className="form__condition"
                                                  onClick={() => this.props.onOpenAgreement()}>умовами</span> та
                            погоджуюсь
                        </label>
                    </div>
                    {this.state.activeSubmit ? <button className="form__button" type="submit">Додати</button> : null}
                </div>
            </form>
        );
    }
}

const FormCategories = ({selects, onUpdateMainForm}) => {
    const options = selects.map((select) => {
        if (select.id !== 0) {
            return (
                <option key={select.id - 1} value={select.id - 1}>
                    {select.name}
                </option>
            );
        }
    });

    if (selects.length !== 0) {
        return (
            <select
                className="form__input form__select"
                name="category"
                required
                onChange={(e) => onUpdateMainForm(e)}>
                <option value="">*Виберіть категорію</option>
                {options}
            </select>
        );
    }

    return null;
};

const FormSocialMedia = ({onUpdateMainForm}) => {
    return (
        <>
            <input
                className="form__input"
                name="instagram"
                type="url"
                placeholder="Instagram"
                onChange={(e) => onUpdateMainForm(e)}/>
            <input
                className="form__input"
                name="telegram"
                type="url"
                placeholder="Telegram"
                onChange={(e) => onUpdateMainForm(e)}/>
            <input
                className="form__input"
                name="facebook"
                type="url"
                placeholder="Facebook"
                onChange={(e) => onUpdateMainForm(e)}/>
        </>
    );
};

const FormBankAccount = ({onUpdateBankForm}) => {
    return (
        <div className="form__bank-block">
            <p className="form__bank-data">Банківські реквізити</p>
            <div className="form__bank-account">
                <input
                    className="form__input"
                    name="fullBankName"
                    type="text"
                    placeholder="Повне ім'я банку"
                    onChange={(e) => onUpdateBankForm(e)}/>
                <input
                    className="form__input"
                    name="shortBankName"
                    type="text"
                    placeholder="Скорочене ім'я банку"
                    onChange={(e) => onUpdateBankForm(e)}/>
                <input
                    className="form__input"
                    name="mfo"
                    type="number"
                    inputMode="numeric"
                    min="6"
                    max="6"
                    placeholder="МФО"
                    onChange={(e) => onUpdateBankForm(e)}/>
                <input
                    className="form__input"
                    name="iban"
                    type="number"
                    inputMode='numeric'
                    max="31"
                    placeholder="IBAN"
                    onChange={(e) => onUpdateBankForm(e)}
                />
                <input
                    className="form__input"
                    name="edrpo"
                    type="number"
                    inputMode='numeric'
                    min="8"
                    max="10"
                    placeholder="ІПН/ЄДРПОУ"
                    onChange={(e) => onUpdateBankForm(e)}/>
                <input
                    className="form__input"
                    name="accountNumber"
                    type="number"
                    inputMode="numeric"
                    placeholder="Розрахунковий рахунок"
                    onChange={(e) => onUpdateBankForm(e)}/>
            </div>
        </div>
    );
};

export default Form;
