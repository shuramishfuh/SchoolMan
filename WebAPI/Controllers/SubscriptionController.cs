using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Models.Core.Interfaces;
using Models.Entities;
using Models.EntityInterfaces;


namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public SubscriptionController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        // GET: api/<SubscriptionController>
        [HttpGet]
        public ActionResult<IEnumerable<ISubscription>> Get()
        {
            var subscription = _unitOfWork.Subscriptions.GetAll();
            if (subscription == null)
            {
                return StatusCode(204);
            }
            return StatusCode(302, subscription);
        }

        // GET api/<SubscriptionController>/5
        [HttpGet("{id}")]
        public ActionResult<ISubscription> Get(int id)
        {
            var subscription = _unitOfWork.Subscriptions.SingleOrDefault(c => c.Id == id);
            if (subscription == null)
            {
                return StatusCode(204);
            }

            return StatusCode(302, subscription);
        }

        // POST api/<SubscriptionController>
        [HttpPost]
        public ActionResult<ISubscription> Add(Subscription clubAndSociety)
        {
            return Ok();



        }

        // PUT api/<SubscriptionController>/5
        [HttpPut("{id}")]
        public ActionResult<ISubscription> Update(ISubscription course)
        {
            return Ok();
        }

        // DELETE api/<SubscriptionController>/5
        [HttpDelete("{id}")]
        public ActionResult<ISubscription> Delete(int id)
        {
            var subscription = _unitOfWork.Subscriptions.SingleOrDefault(c => c.Id == id);
            if (subscription == null)
            {
                return StatusCode(204);
            }

            _unitOfWork.Subscriptions.Remove(subscription);
            _unitOfWork.Complete();
            return StatusCode(202);
        }
    }
}
