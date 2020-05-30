using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;


namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GradeController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public GradeController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        // GET: api/<GradeController>
        [HttpGet]
        public ActionResult<IEnumerable<IGrade>> Get()
        {
            var grade = _unitOfWork.Grades.GetAll();
            if (grade == null)
            {
                return StatusCode(204);
            }
            return StatusCode(302, grade);
        }

        // GET api/<GradeController>/5
        [HttpGet("{id}")]
        public ActionResult<IGrade> Get(int id)
        {
            var grade = _unitOfWork.Grades.SingleOrDefault(c => c.Id == id);
            if (grade == null)
            {
                return StatusCode(204);
            }

            return StatusCode(302, grade);
        }

        // POST api/<GradeController>
        [HttpPost]
        public ActionResult<IGrade> Add(Grade clubAndSociety)
        {
            return Ok();



        }

        // PUT api/<GradeController>/5
        [HttpPut("{id}")]
        public ActionResult<IGrade> Update(IGrade course)
        {
            return Ok();
        }

        // DELETE api/<GradeController>/5
        [HttpDelete("{id}")]
        public ActionResult<IGrade> Delete(int id)
        {
            var grade = _unitOfWork.Grades.SingleOrDefault(c => c.Id == id);
            if (grade == null)
            {
                return StatusCode(204);
            }

            _unitOfWork.Grades.Remove(grade);
            _unitOfWork.Complete();
            return StatusCode(202);
        }
    }
}
