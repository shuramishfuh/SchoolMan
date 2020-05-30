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
    public class ClassController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public ClassController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        // GET: api/<ClassController>
        [HttpGet]
        public ActionResult<IEnumerable<IClass>> Get()
        {
            var @class = _unitOfWork.Classes.GetAll();
            if (@class == null)
            {
                return StatusCode(204);
            }
            return StatusCode(302, @class);
        }

        // GET api/<ClassController>/5
        [HttpGet("{id}")]
        public ActionResult<IClass> Get(int id)
        {
            var @class = _unitOfWork.Classes.SingleOrDefault(c => c.Id == id);
            if (@class == null)
            {
                return StatusCode(204);
            }

            return StatusCode(302, @class);
        }

        // POST api/<ClassController>
        [HttpPost]
        public ActionResult<IClass> Add(Class @class)
        {
            return Ok();



        }

        // PUT api/<ClassController>/5
        [HttpPut("{id}")]
        public ActionResult<IClass> Update(IClass @class)
        {
            return Ok();
        }

        // DELETE api/<ClassController>/5
        [HttpDelete("{id}")]
        public ActionResult<IClass> Delete(int id)
        {
            var @class = _unitOfWork.Classes.SingleOrDefault(c => c.Id == id);
            if (@class == null)
            {
                return StatusCode(204);
            }

            _unitOfWork.Classes.Remove(@class);
            _unitOfWork.Complete();
            return StatusCode(202);
        }
    }
}
