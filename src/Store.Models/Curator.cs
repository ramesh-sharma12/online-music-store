using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Models
{
    public class Curator : BaseEntity
    {
        public string curator_id { get; set; }
        public string curator_handle { get; set; }
        public string curator_url { get; set; }
        public string curator_site_url { get; set; }
        public string curator_image_file { get; set; }
        public string curator_type { get; set; }
        public string curator_title { get; set; }
        public string curator_tagline { get; set; }
        public string curator_bio { get; set; }
        public string curator_favorites { get; set; }
        public string curator_comments { get; set; }
        public string curator_playlists { get; set; }
        public string curator_date_created { get; set; }
    }

    public class CuratorDataSet
    {
        public string title { get; set; }
        public string message { get; set; }
        public List<object> errors { get; set; }
        public string total { get; set; }
        public int total_pages { get; set; }
        public int page { get; set; }
        public int limit { get; set; }
        public List<Curator> dataset { get; set; }
    }
}
