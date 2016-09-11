using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Models
{
    public class MyFavourite
    {
        public string UserId { get; set; }
        public List<Track> Songs { get; set; }
    }
}
