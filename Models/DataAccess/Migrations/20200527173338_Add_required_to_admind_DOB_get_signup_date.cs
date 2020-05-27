using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Models.DataAccess.Migrations
{
    public partial class Add_required_to_admind_DOB_get_signup_date : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "SignUp",
                table: "Admin",
                type: "date",
                nullable: false,
                defaultValueSql: "GetDate()",
                oldClrType: typeof(DateTime),
                oldType: "date");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "SignUp",
                table: "Admin",
                type: "date",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "date",
                oldDefaultValueSql: "GetDate()");
        }
    }
}
