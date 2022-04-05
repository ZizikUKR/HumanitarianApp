using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HumanitarianApp.Api.Migrations
{
    public partial class UpdateRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_BankDetails_VolunteerId",
                table: "BankDetails");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9bf1f9fb-69d6-4eb4-93d0-c09b498155d0");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "90271977-1764-457c-b6fa-d2afc9f5b899", "960f4012-78c1-450e-9100-6929cfbb1c4f", "Administrator", "ADMINISTRATOR" });

            migrationBuilder.CreateIndex(
                name: "IX_BankDetails_VolunteerId",
                table: "BankDetails",
                column: "VolunteerId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_BankDetails_VolunteerId",
                table: "BankDetails");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "90271977-1764-457c-b6fa-d2afc9f5b899");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "9bf1f9fb-69d6-4eb4-93d0-c09b498155d0", "0fabcd7d-4dc5-4a1e-8a9e-e1414647b181", "Administrator", "ADMINISTRATOR" });

            migrationBuilder.CreateIndex(
                name: "IX_BankDetails_VolunteerId",
                table: "BankDetails",
                column: "VolunteerId");
        }
    }
}
