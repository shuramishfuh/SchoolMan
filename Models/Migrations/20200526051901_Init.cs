using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Models.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                "Accomodation",
                table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table => { table.PrimaryKey("PK_Accomodation", x => x.ID); });

            migrationBuilder.CreateTable(
                "Admin",
                table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    UserName = table.Column<string>(maxLength: 50, nullable: false),
                    Email = table.Column<string>(maxLength: 50, nullable: false),
                    Password = table.Column<string>(maxLength: 50, nullable: false),
                    DOB = table.Column<DateTime>("date", nullable: false),
                    SignUp = table.Column<DateTime>("date", nullable: false)
                },
                constraints: table => { table.PrimaryKey("PK_Admin", x => x.ID); });

            migrationBuilder.CreateTable(
                "Class",
                table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    Tuition = table.Column<double>(nullable: false)
                },
                constraints: table => { table.PrimaryKey("PK_Class", x => x.ID); });

            migrationBuilder.CreateTable(
                "ClubAndSociety",
                table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table => { table.PrimaryKey("PK_ClubAndSociety", x => x.ID); });

            migrationBuilder.CreateTable(
                "Teacher",
                table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    UserName = table.Column<string>(maxLength: 50, nullable: false),
                    Password = table.Column<string>(maxLength: 50, nullable: false),
                    Email = table.Column<string>(maxLength: 50, nullable: false),
                    DateOfEntry = table.Column<DateTime>("date", nullable: false)
                },
                constraints: table => { table.PrimaryKey("PK_Teacher", x => x.ID); });

            migrationBuilder.CreateTable(
                "Room",
                table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoomNumber = table.Column<string>(maxLength: 50, nullable: false),
                    NumberAllowed = table.Column<byte>(nullable: false),
                    NumberInRoom = table.Column<byte>(nullable: false),
                    Amount = table.Column<float>(nullable: false),
                    AccomodationID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Room", x => x.ID);
                    table.ForeignKey(
                        "Room_accomodation",
                        x => x.AccomodationID,
                        "Accomodation",
                        "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "CreditCard",
                table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreditCardNumber = table.Column<string>(maxLength: 20, nullable: false),
                    ExpiryDate = table.Column<DateTime>("date", nullable: false),
                    SecurityCode = table.Column<byte>(nullable: false),
                    Admin_ID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CreditCard", x => x.ID);
                    table.ForeignKey(
                        "FK_CreditCard_Admin",
                        x => x.Admin_ID,
                        "Admin",
                        "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "Subscription",
                table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(maxLength: 16, nullable: false),
                    StartDate = table.Column<DateTime>("date", nullable: false),
                    ExpireDate = table.Column<DateTime>("date", nullable: false),
                    Amount = table.Column<float>(nullable: false),
                    Admin_ID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subscription", x => x.ID);
                    table.ForeignKey(
                        "FK__Subscript__Admin__01142BA1",
                        x => x.Admin_ID,
                        "Admin",
                        "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "Course",
                table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseName = table.Column<string>(maxLength: 50, nullable: false),
                    TeacherID = table.Column<int>(nullable: false),
                    Level = table.Column<string>(maxLength: 10, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Course", x => x.ID);
                    table.ForeignKey(
                        "FK_Course_Teacher",
                        x => x.TeacherID,
                        "Teacher",
                        "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                "Student",
                table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(maxLength: 60, nullable: false),
                    UserName = table.Column<string>(maxLength: 50, nullable: false),
                    Email = table.Column<string>(maxLength: 50, nullable: false),
                    Password = table.Column<string>("text", nullable: false),
                    Admitted = table.Column<DateTime>("date", nullable: false),
                    TuitionPaid = table.Column<bool>(nullable: false),
                    RoomID = table.Column<int>(nullable: true),
                    ClubAndSocietyID = table.Column<int>(nullable: true),
                    ClassID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Student", x => x.ID);
                    table.ForeignKey(
                        "FK_Student_Class",
                        x => x.ClassID,
                        "Class",
                        "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        "FK_Student_ClubAndSociety",
                        x => x.ClubAndSocietyID,
                        "ClubAndSociety",
                        "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        "FK_Student_Room",
                        x => x.RoomID,
                        "Room",
                        "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                "Grade",
                table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LetterGrade = table.Column<string>(maxLength: 1, nullable: false),
                    NumericGrade = table.Column<double>(nullable: false),
                    CourseID = table.Column<int>(nullable: false),
                    StudentID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Grade", x => x.ID);
                    table.ForeignKey(
                        "FK_Grade_Course",
                        x => x.CourseID,
                        "Course",
                        "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        "FK_Grade_Student",
                        x => x.StudentID,
                        "Student",
                        "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                "IX_Course_TeacherID",
                "Course",
                "TeacherID");

            migrationBuilder.CreateIndex(
                "IX_CreditCard_Admin_ID",
                "CreditCard",
                "Admin_ID");

            migrationBuilder.CreateIndex(
                "IX_Grade_CourseID",
                "Grade",
                "CourseID");

            migrationBuilder.CreateIndex(
                "IX_Grade_StudentID",
                "Grade",
                "StudentID");

            migrationBuilder.CreateIndex(
                "IX_Room_AccomodationID",
                "Room",
                "AccomodationID");

            migrationBuilder.CreateIndex(
                "IX_Student_ClassID",
                "Student",
                "ClassID");

            migrationBuilder.CreateIndex(
                "IX_Student_ClubAndSocietyID",
                "Student",
                "ClubAndSocietyID");

            migrationBuilder.CreateIndex(
                "IX_Student_RoomID",
                "Student",
                "RoomID");

            migrationBuilder.CreateIndex(
                "admin_sub",
                "Subscription",
                "Admin_ID",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                "CreditCard");

            migrationBuilder.DropTable(
                "Grade");

            migrationBuilder.DropTable(
                "Subscription");

            migrationBuilder.DropTable(
                "Course");

            migrationBuilder.DropTable(
                "Student");

            migrationBuilder.DropTable(
                "Admin");

            migrationBuilder.DropTable(
                "Teacher");

            migrationBuilder.DropTable(
                "Class");

            migrationBuilder.DropTable(
                "ClubAndSociety");

            migrationBuilder.DropTable(
                "Room");

            migrationBuilder.DropTable(
                "Accomodation");
        }
    }
}