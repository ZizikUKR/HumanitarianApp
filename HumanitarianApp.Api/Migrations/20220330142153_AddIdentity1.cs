using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HumanitarianApp.Api.Migrations
{
    public partial class AddIdentity1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "12a764ca-fffe-464e-8e4e-05721285087d");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "9bf1f9fb-69d6-4eb4-93d0-c09b498155d0", "0fabcd7d-4dc5-4a1e-8a9e-e1414647b181", "Administrator", "ADMINISTRATOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9bf1f9fb-69d6-4eb4-93d0-c09b498155d0");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "12a764ca-fffe-464e-8e4e-05721285087d", "ddccf434-c182-45d2-be0d-5210ee8db366", "Administrator", "ADMINISTRATOR" });
        }
    }
}
