using Microsoft.EntityFrameworkCore.Migrations;

namespace Models.DataAccess.Migrations
{
    public partial class Added_defaultPasswordTO_Teacher_table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "Teacher",
                maxLength: 50,
                nullable: false,
                defaultValue: "Tpassword",
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldMaxLength: 50);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "Teacher",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 50,
                oldDefaultValue: "Tpassword");
        }
    }
}
