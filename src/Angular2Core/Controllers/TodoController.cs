using Angular2Core.Models;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Angular2Core.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        public TodoController()
        {
        }

        [HttpGet]
        [Route("getall")]

        public IEnumerable<TodoItem> GetAll()
        {
            var TodoItems = new List<TodoItem>();
            TodoItems.Add(new TodoItem() { IsComplete = false, Key = Guid.NewGuid().ToString(), Name = "Item 1" });
            TodoItems.Add(new TodoItem() { IsComplete = false, Key = Guid.NewGuid().ToString(), Name = "Item 2" });
            TodoItems.Add(new TodoItem() { IsComplete = false, Key = Guid.NewGuid().ToString(), Name = "Item 3" });
            TodoItems.Add(new TodoItem() { IsComplete = false, Key = Guid.NewGuid().ToString(), Name = "Item 4" });
            return TodoItems;
        }
    }
}
