using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Store.Web.Services;
using Store.Services;
using Microsoft.Extensions.Logging;
using Store.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Store.Web.Controllers
{
    [Route("api/genres")]
    public class GenreController : Controller
    {
        private readonly IFmaService _emaService;
        private readonly ILogger<SongController> _logger;

        public GenreController(ISongService service, IFmaService emaService, ILogger<SongController> logger)
        {
            _emaService = emaService;
            _logger = logger;
        }

        // GET: api/values
        [HttpGet]
        public List<Genre> Get()
        {
            var result = _emaService.GetGenres();

            return result.dataset;
        }        
    }
}
