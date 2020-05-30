using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public EventController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        // GET: api/<EventController>
        [HttpGet]
        public ActionResult<IEnumerable<IEvent>> Get()
        {
            var @event = _unitOfWork.Events.GetAll();
            if (@event == null)
            {
                return StatusCode(204);
            }
            return StatusCode(302, @event);
        }

        // GET api/<EventController>/5
        [HttpGet("{id}")]
        public ActionResult<IEvent> Get(int id)
        {
            var @event = _unitOfWork.Events.SingleOrDefault(c => c.Id == id);
            if (@event == null)
            {
                return StatusCode(204);
            }

            return StatusCode(302, @event);
        }

        // POST api/<EventController>
        [HttpPost]
        public ActionResult<IEvent> Add(Event clubAndSociety)
        {
            return Ok();



        }

        // PUT api/<EventController>/5
        [HttpPut("{id}")]
        public ActionResult<IEvent> Update(IEvent course)
        {
            return Ok();
        }

        // DELETE api/<EventController>/5
        [HttpDelete("{id}")]
        public ActionResult<IEvent> Delete(int id)
        {
            var @event = _unitOfWork.Events.SingleOrDefault(c => c.Id == id);
            if (@event == null)
            {
                return StatusCode(204);
            }

            _unitOfWork.Events.Remove(@event);
            _unitOfWork.Complete();
            return StatusCode(202);
        }
    }
}
