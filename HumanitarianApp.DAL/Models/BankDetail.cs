using System.ComponentModel.DataAnnotations;

namespace HumanitarianApp.DAL.Models
{
    public class BankDetail
    {
        [Key]
        [Required]
        public Guid BankId { get; set; }
        public string  FullBankName { get; set; } // полное имя банка
        public string  ShortBankName { get; set; } // сокращенное имя банка 
        public string  IBAN{ get; set; } //IBAN номер
        public string  AccountNumber{ get; set; } //расчётный счёт 
        public string  MFO { get; set; } // МФО 
        public string EDRPO { get; set; } //ЕДРПО
        public string CardNumber { get; set; } //номер карты 

        public Guid EntityId { get; set; }
        //Revers Navigation
        public Entity Entity{ get; set; }
    }
}
