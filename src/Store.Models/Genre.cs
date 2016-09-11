using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Models
{
    public class Genre : BaseEntity
    {
        public string genre_id { get; set; }
        public string genre_parent_id { get; set; }
        public string genre_title { get; set; }
        public string genre_handle { get; set; }
        public string genre_color { get; set; }
    }

    public class GenreDataSet
    {
        public string title { get; set; }
        public string message { get; set; }
        public List<object> errors { get; set; }
        public string total { get; set; }
        public int total_pages { get; set; }
        public int page { get; set; }
        public int limit { get; set; }
        public List<Genre> dataset { get; set; }
    }
}
