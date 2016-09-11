using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Models
{
    public class PlayList
    {
        public string TrackId { get; set; }

        public string Name { get; set; }

        public DateTime AddedOn { get; set; }

        public List<Track> Songs { get; set; }            

        public int NoOfSongs { get; set; }
    }
}
