using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;


namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccomodationController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public AccomodationController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        // GET: api/<AccomodationController>
        [HttpGet]
        public ActionResult<IEnumerable<IAccomodation>> Get()
        {
            var accom = _unitOfWork.Accommodations.GetAll();
            if (accom == null)
            {
                return StatusCode(204);
            }
            return StatusCode(302, accom);
        }

        // GET api/<AccomodationController>/5
        [HttpGet("{id}")]
        public ActionResult<IAccomodation> Get(int id)
        {
            var accom = _unitOfWork.Accommodations.SingleOrDefault(c => c.Id == id);
            if (accom == null)
            {
                return StatusCode(204);
            }

            return StatusCode(302, accom);
        }

        // POST api/<AccomodationController>
        [HttpPost]
        public ActionResult<IAccomodation> Add(Accomodation accomodation)
        {
            var ifexist = _unitOfWork.Accommodations.Find(c => c.Name == accomodation.Name);
            if (accomodation.Name == null)
            {
                return BadRequest();
            }

            else
            {
                if (ifexist == null)
                {
                    _unitOfWork.Accommodations.Add(accomodation);
                    _unitOfWork.Complete();
                    return Created("Get", new { id = accomodation.Id });
                }
                else
                {
                    return StatusCode(409, "Item already exist");
                }
            }

        }

        // PUT api/<AccomodationController>/5
        [HttpPut("{id}")]
        public ActionResult<IAccomodation> Update(IAccomodation accomodation)
        {
            var accom = _unitOfWork.Accommodations.SingleOrDefault(a => a.Id == accomodation.Id);
            if (accom == null)
            {
                return StatusCode(404);
            }
            else
            {
                accom.Name = accomodation.Name;
                _unitOfWork.Accommodations.UpdateAccomodation(accom);
                _unitOfWork.Complete();
                return Ok();
            }
        }

        // DELETE api/<AccomodationController>/5
        [HttpDelete("{id}")]
        public ActionResult<IAccomodation> Delete(int id)
        {
            var accom = _unitOfWork.Accommodations.SingleOrDefault(c => c.Id == id);
            if (accom == null)
            {
                return StatusCode(204);
            }

            _unitOfWork.Accommodations.Remove(accom);
            _unitOfWork.Complete();
            return StatusCode(202);
        }
    }
}
