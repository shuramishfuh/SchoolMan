using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;


namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public StudentController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        // GET: api/<StudentController>
        [HttpGet]
        public ActionResult<IEnumerable<IStudent>> Get()
        {
            var student = _unitOfWork.Students.GetAll();
            if (student == null)
            {
                return StatusCode(204);
            }
            return StatusCode(302, student);
        }

        // GET api/<StudentController>/5
        [HttpGet("{id}")]
        public ActionResult<IStudent> Get(int id)
        {
            var student = _unitOfWork.Students.SingleOrDefault(c => c.Id == id);
            if (student == null)
            {
                return StatusCode(204);
            }

            return StatusCode(302, student);
        }

        // POST api/<StudentController>
        [HttpPost]
        public ActionResult<IStudent> Add(Student clubAndSociety)
        {
            return Ok();



        }

        // PUT api/<StudentController>/5
        [HttpPut("{id}")]
        public ActionResult<IStudent> Update(IStudent course)
        {
            return Ok();
        }

        // DELETE api/<StudentController>/5
        [HttpDelete("{id}")]
        public ActionResult<IStudent> Delete(int id)
        {
            var student = _unitOfWork.Students.SingleOrDefault(c => c.Id == id);
            if (student == null)
            {
                return StatusCode(204);
            }

            _unitOfWork.Students.Remove(student);
            _unitOfWork.Complete();
            return StatusCode(202);
        }
    }
}
