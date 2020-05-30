using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public CourseController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        // GET: api/<CourseController>
        [HttpGet]
        public ActionResult<IEnumerable<ICourse>> Get()
        {
            var course = _unitOfWork.Courses.GetAll();
            if (course == null)
            {
                return StatusCode(204);
            }
            return StatusCode(302, course);
        }

        // GET api/<CourseController>/5
        [HttpGet("{id}")]
        public ActionResult<ICourse> Get(int id)
        {
            var course = _unitOfWork.Courses.SingleOrDefault(c => c.Id == id);
            if (course == null)
            {
                return StatusCode(204);
            }

            return StatusCode(302, course);
        }

        // POST api/<CourseController>
        [HttpPost]
        public ActionResult<ICourse> Add(Course clubAndSociety)
        {
            return Ok();



        }

        // PUT api/<CourseController>/5
        [HttpPut("{id}")]
        public ActionResult<ICourse> Update(ICourse course)
        {
            return Ok();
        }

        // DELETE api/<CourseController>/5
        [HttpDelete("{id}")]
        public ActionResult<ICourse> Delete(int id)
        {
            var course = _unitOfWork.Courses.SingleOrDefault(c => c.Id == id);
            if (course == null)
            {
                return StatusCode(204);
            }

            _unitOfWork.Courses.Remove(course);
            _unitOfWork.Complete();
            return StatusCode(202);
        }
    }
}
