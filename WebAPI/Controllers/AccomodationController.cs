using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models.Core.Interfaces;
using Models.EntityInterfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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
            var a = _unitOfWork.Accommodations.GetAll();
            return Ok(a);
        }

        // GET api/<AccomodationController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AccomodationController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<AccomodationController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AccomodationController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
