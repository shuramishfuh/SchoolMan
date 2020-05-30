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
    public class CreditCardController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public CreditCardController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        // GET: api/<CreditCardController>
        [HttpGet]
        public ActionResult<IEnumerable<ICreditCard>> Get()
        {
            var cc = _unitOfWork.CreditCards.GetAll();
            if (cc == null)
            {
                return StatusCode(204);
            }
            return StatusCode(302, cc);
        }

        // GET api/<CreditCardController>/5
        [HttpGet("{id}")]
        public ActionResult<ICreditCard> Get(int id)
        {
            var cc = _unitOfWork.CreditCards.SingleOrDefault(c => c.Id == id);
            if (cc == null)
            {
                return StatusCode(204);
            }

            return StatusCode(302, cc);
        }

        // POST api/<CreditCardController>
        [HttpPost]
        public ActionResult<ICreditCard> Add(CreditCard clubAndSociety)
        {
            return Ok();



        }

        // PUT api/<CreditCardController>/5
        [HttpPut("{id}")]
        public ActionResult<ICreditCard> Update(ICreditCard course)
        {
            return Ok();
        }

        // DELETE api/<CreditCardController>/5
        [HttpDelete("{id}")]
        public ActionResult<ICreditCard> Delete(int id)
        {
            var cc = _unitOfWork.CreditCards.SingleOrDefault(c => c.Id == id);
            if (cc == null)
            {
                return StatusCode(204);
            }

            _unitOfWork.CreditCards.Remove(cc);
            _unitOfWork.Complete();
            return StatusCode(202);
        }
    }
}
