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
    [Route("api/albums")]
    public class AlbumController : Controller
    {
        private readonly IFmaService _emaService;
        private readonly ILogger<SongController> _logger;

        public AlbumController(ISongService service, IFmaService emaService, ILogger<SongController> logger)
        {
            _emaService = emaService;
            _logger = logger;
        }

        // GET: api/values
        [HttpGet]
        public AlbumDataSet Get()
        {
            return _emaService.GetAlbums();
        }        
    }
}
