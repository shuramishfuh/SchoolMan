using Microsoft.EntityFrameworkCore.Migrations;

namespace Models.DataAccess.Migrations
{
    public partial class Added_defaultPasswordTO_table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "Student",
                type: "text",
                nullable: false,
                defaultValue: "password",
                oldClrType: typeof(string),
                oldType: "text");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "Student",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text",
                oldDefaultValue: "password");
        }
    }
}
