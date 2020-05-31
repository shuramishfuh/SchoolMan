using System.Collections.Generic;
using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Mvc;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClubAndSocietyController : ControllerBase
    {
        
        private readonly IUnitOfWork _unitOfWork;

        public ClubAndSocietyController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        // GET: api/<ClubAndSocietyController>
        [HttpGet]
        [EnableQuery]
        public ActionResult<IEnumerable<IClubAndSociety>> Get()
        {
            var Class = _unitOfWork.ClubAndSocieties.GetAll();
            if (Class == null)
            {
                return StatusCode(204);
            }
            return StatusCode(302, Class);
        }

        // GET api/<ClubAndSocietyController>/5
        [HttpGet("{id}")]
        [EnableQuery]
        public ActionResult<IClubAndSociety> Get(int id)
        {
            var Class = _unitOfWork.ClubAndSocieties.SingleOrDefault(c => c.Id == id);
            if (Class == null)
            {
                return StatusCode(204);
            }

            return StatusCode(302, Class);
        }

        // POST api/<ClubAndSocietyController>
        [HttpPost]
        public ActionResult<IClubAndSociety> Add(ClubAndSociety clubAndSociety)
        {
            return Ok();



        }

        // PUT api/<ClubAndSocietyController>/5
        [HttpPut("{id}")]
        public ActionResult<IClubAndSociety> Update(IClubAndSociety @class)
        {
            return Ok();
        }

        // DELETE api/<ClubAndSocietyController>/5
        [HttpDelete("{id}")]
        public ActionResult<IClubAndSociety> Delete(int id)
        {
            var clubAndSociety = _unitOfWork.ClubAndSocieties.SingleOrDefault(c => c.Id == id);
            if (clubAndSociety == null)
            {
                return StatusCode(204);
            }

            _unitOfWork.ClubAndSocieties.Remove(clubAndSociety);
            _unitOfWork.Complete();
            return StatusCode(202);
        }
    }
}
