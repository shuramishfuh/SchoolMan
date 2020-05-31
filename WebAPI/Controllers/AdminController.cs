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
    public class AdminController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public AdminController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        // GET: api/<AdminController>
        [HttpGet]
        [EnableQuery]
        public ActionResult<IEnumerable<IAdmin>> Get()
        {
            var admin = _unitOfWork.Admins.GetAll();
            if (admin == null)
            {
                return StatusCode(204);
            }
            return StatusCode(302, admin);
        }

        // GET api/<AdminController>/5
        [HttpGet("{id}")]
        [EnableQuery]
        public ActionResult<IAdmin> Get(int id)
        {
            var admin = _unitOfWork.Admins.SingleOrDefault(c => c.Id == id);
            if (admin == null)
            {
                return StatusCode(204);
            }

            return StatusCode(302, admin);
        }

        // POST api/<AdminController>
        [HttpPost]
        public ActionResult<IAdmin> Add(Admin admin)
        {
            return Ok();



        }

        // PUT api/<AdminController>/5
        [HttpPut("{id}")]
        public ActionResult<IAdmin> Update(IAccomodation accomodation)
        {
            return Ok();
        }

        // DELETE api/<AdminController>/5
        [HttpDelete("{id}")]
        public ActionResult<IAdmin> Delete(int id)
        {
            var admin = _unitOfWork.Admins.SingleOrDefault(c => c.Id == id);
            if (admin == null)
            {
                return StatusCode(204);
            }

            _unitOfWork.Admins.Remove(admin);
            _unitOfWork.Complete();
            return StatusCode(202);
        }
    }
}
