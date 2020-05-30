using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;


namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public RoomController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        // GET: api/<RoomController>
        [HttpGet]
        public ActionResult<IEnumerable<IRoom>> Get()
        {
            var room = _unitOfWork.Rooms.GetAll();
            if (room == null)
            {
                return StatusCode(204);
            }
            return StatusCode(302, room);
        }

        // GET api/<RoomController>/5
        [HttpGet("{id}")]
        public ActionResult<IRoom> Get(int id)
        {
            var room = _unitOfWork.Rooms.SingleOrDefault(c => c.Id == id);
            if (room == null)
            {
                return StatusCode(204);
            }

            return StatusCode(302, room);
        }

        // POST api/<RoomController>
        [HttpPost]
        public ActionResult<IRoom> Add(Room clubAndSociety)
        {
            return Ok();



        }

        // PUT api/<RoomController>/5
        [HttpPut("{id}")]
        public ActionResult<IRoom> Update(IRoom course)
        {
            return Ok();
        }

        // DELETE api/<RoomController>/5
        [HttpDelete("{id}")]
        public ActionResult<IRoom> Delete(int id)
        {
            var room = _unitOfWork.Rooms.SingleOrDefault(c => c.Id == id);
            if (room == null)
            {
                return StatusCode(204);
            }

            _unitOfWork.Rooms.Remove(room);
            _unitOfWork.Complete();
            return StatusCode(202);
        }
    }
}
