using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Models
{
    public class ArtistImage
    {
        public string image_id { get; set; }
        public string image_file { get; set; }
        public string image_title { get; set; }
        public string image_caption { get; set; }
        public string image_copyright { get; set; }
        public string image_source { get; set; }
    }

    public class Artist : BaseEntity
    {
        public string artist_id { get; set; }
        public string artist_handle { get; set; }
        public string artist_url { get; set; }
        public string artist_name { get; set; }
        public string artist_bio { get; set; }
        public string artist_members { get; set; }
        public string artist_website { get; set; }
        public object artist_wikipedia_page { get; set; }
        public string artist_donation_url { get; set; }
        public object artist_contact { get; set; }
        public string artist_active_year_begin { get; set; }
        public object artist_active_year_end { get; set; }
        public string artist_related_projects { get; set; }
        public string artist_associated_labels { get; set; }
        public string artist_comments { get; set; }
        public string artist_favorites { get; set; }
        public string artist_date_created { get; set; }
        public object artist_flattr_name { get; set; }
        public object artist_paypal_name { get; set; }
        public string artist_latitude { get; set; }
        public string artist_longitude { get; set; }
        public string artist_image_file { get; set; }
        public string artist_location { get; set; }
        public List<object> tags { get; set; }
        public List<ArtistImage> artist_images { get; set; }
    }

    public class ArtistDataSet
    {
        public string title { get; set; }
        public string message { get; set; }
        public List<object> errors { get; set; }
        public string total { get; set; }
        public int total_pages { get; set; }
        public int page { get; set; }
        public int limit { get; set; }
        public List<Artist> dataset { get; set; }
    }
}
