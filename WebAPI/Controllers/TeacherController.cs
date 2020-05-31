using System.Collections.Generic;
using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Mvc;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;


namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public TeacherController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        // GET: api/<TeacherController>
        [HttpGet]
        [EnableQuery]
        public ActionResult<IEnumerable<ITeacher>> Get()
        {
            var teacher = _unitOfWork.Teacher.GetAll();
            if (teacher == null)
            {
                return StatusCode(204);
            }
            return StatusCode(302, this);
        }

        // GET api/<TeacherController>/5
        [HttpGet("{id}")]
        [EnableQuery]
        public ActionResult<ITeacher> Get(int id)
        {
            var teacher = _unitOfWork.Teacher.SingleOrDefault(c => c.Id == id);
            if (teacher == null)
            {
                return StatusCode(204);
            }

            return StatusCode(302, teacher);
        }

        // POST api/<TeacherController>
        [HttpPost]
        public ActionResult<ITeacher> Add(Teacher clubAndSociety)
        {
            return Ok();



        }

        // PUT api/<TeacherController>/5
        [HttpPut("{id}")]
        public ActionResult<ISubscription> Update(ISubscription course)
        {
            return Ok();
        }

        // DELETE api/<TeacherController>/5
        [HttpDelete("{id}")]
        public ActionResult<ITeacher> Delete(int id)
        {
            var teacher = _unitOfWork.Teacher.SingleOrDefault(c => c.Id == id);
            if (teacher == null)
            {
                return StatusCode(204);
            }

            _unitOfWork.Teacher.Remove(teacher);
            _unitOfWork.Complete();
            return StatusCode(202);
        }
    }
}
