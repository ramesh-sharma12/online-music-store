using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Store.Services;
using Store.Models;
using Microsoft.Extensions.Logging;
using Store.Web.Services;
using Store.Web.ViewModel;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Store.Web.Controllers
{
    [Route("api/songs")]
    public class SongController : Controller
    {
        private readonly ISongService _songService;
        private readonly IFmaService _emaService;
        private readonly ILogger<SongController> _logger;

        public SongController(ISongService service, IFmaService emaService, ILogger<SongController> logger)
        {
            _songService = service;
            _emaService = emaService;
            _logger = logger;
        }

        // GET: api/values
        [HttpGet]
        public TrackDataSet Get()
        {
            _logger.LogDebug("Listing all items");

            var songs = _emaService.GetSongs();

            return songs;
        }        

        // GET api/values/5
        [HttpGet("{type}")]
        public RecentTracks Get(string type)
        {
            if (type == "recent")
            {
                return _emaService.GetRecentSongs();
            }
            else {
                return _emaService.GetFeaturedSong();
            }
        }
    }
}
