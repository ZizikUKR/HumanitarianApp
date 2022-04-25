import { Component } from "react";
import Footer from "../footer/Footer";
import Service from "../../services/Service";

export default class Card extends Component {
    Obj = {};
    getAllVolunteersInId = (cardId) => {
        this.service
          .get(`${process.env.REACT_APP_API_URL}Volunteer/GetById?id=f76d397d-0318-4b41-b3e7-4a9dd4c4c210`)
          .then() => {
            const volonteers = () => {
              return {
                cardId: this.isEmpty(item.id),
                select: this.setVolunteersCategory(item.category),
                name: this.isEmpty(item.name),
                telephone: this.isEmpty(item.phoneNumber),
                email: this.isEmpty(item.email),
                city: this.isEmpty(item.city),
                address: this.isEmpty(item.address),
                text: this.isEmpty(item.description),  
                instagram: this.isEmpty(item.instagram),
                telegram: this.isEmpty(item.telegram),
                facebook: this.isEmpty(item.facebook),
                cardnumber: this.isEmpty(item.bankDetails?.cardNumber),
                fullbankname: this.isEmpty(item.bankDetails?.fullBankName),
                shortbankname: this.isEmpty(item.bankDetails?.shortBankName),
                mfo: this.isEmpty(item.bankDetails?.mfo),
                iban: this.isEmpty(item.bankDetails?.iban),
                edrpou: this.isEmpty(item.bankDetails?.edrpo),
                accountnumber: this.isEmpty(item.bankDetails?.accountNumber),
              };
            };
            let newsectionsData = Object.assign({}, this.state.sectionsData);
            newsectionsData[0].ads = volonteers;
    
            this.setState({ sectionsData: newsectionsData });
          });
    
          
      };

      serviceId = new Service();
  componentDidMountId() {
    this.getAllVolunteersInId()
  }
    componentDidMount(){
        // const query = new URLSearchParams(this.props.location);
        // debugger;
        // const id = query.get('id')
        debugger;
        const id = window.location.search;
    }
    render() {
        
        return (
            <>   
            <div className='card'>
                <div className='container'>
                    <div className='card__name'>asdfasf
                    </div>
                    <div className='card__information'>
                        <div className='card__text'>adas</div>
                        <div className='card__contacts'>asdf</div>
                    </div>   
                </div>
            </div>
            <Footer />
            </>
        )
    }
}
