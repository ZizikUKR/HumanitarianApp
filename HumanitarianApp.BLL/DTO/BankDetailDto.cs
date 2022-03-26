using HumanitarianApp.BLL.DTO;

namespace HumanitarianApp.Bll.DTO
{
    public class BankDetailDto : EntityDto
    {
        public string FullBankName { get; set; } // полное имя банка
        public string ShortBankName { get; set; } // сокращенное имя банка 
        public string IBAN { get; set; } //IBAN номер
        public string AccountNumber { get; set; } //расчётный счёт 
        public string MFO { get; set; } // МФО 
        public string EDRPO { get; set; } //ЕДРПО
        public string CardNumber { get; set; } //номер карт
    }
}
