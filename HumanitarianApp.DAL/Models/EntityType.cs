namespace HumanitarianApp.DAL.Models
{
    public enum EntityType : byte
    {
        Volontiers,
        Enterprises,
        Notice
    }

    public enum VolunteerCategory : byte
    {
        Transportation,
        Medicine,
        HumanitarianAid,
        Other
    }
    public enum EnterpriseCategory : byte
    {
    }
    public enum NoticeCategory : byte
    {
        Searching,
        Found,
        Sell,
        Buy,
        Give,
        Take,
        Other
    }
}
