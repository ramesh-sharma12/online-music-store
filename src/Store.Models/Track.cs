using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Models
{
    public class Track
    {
        public string track_id { get; set; }
        public string track_title { get; set; }
        public string track_url { get; set; }
        public string track_image_file { get; set; }
        public string artist_id { get; set; }
        public string artist_name { get; set; }
        public string artist_url { get; set; }
        public string artist_website { get; set; }
        public string album_id { get; set; }
        public string album_title { get; set; }
        public string album_url { get; set; }
        public string license_title { get; set; }
        public string license_url { get; set; }
        public string track_language_code { get; set; }
        public string track_duration { get; set; }
        public string track_number { get; set; }
        public string track_disc_number { get; set; }
        public string track_explicit { get; set; }
        public object track_explicit_notes { get; set; }
        public string track_copyright_c { get; set; }
        public string track_copyright_p { get; set; }
        public string track_composer { get; set; }
        public object track_lyricist { get; set; }
        public string track_publisher { get; set; }
        public string track_instrumental { get; set; }
        public object track_information { get; set; }
        public object track_date_recorded { get; set; }
        public string track_comments { get; set; }
        public string track_favorites { get; set; }
        public string track_listens { get; set; }
        public string track_interest { get; set; }
        public string track_bit_rate { get; set; }
        public string track_date_created { get; set; }
        public string track_file { get; set; }
        public string license_image_file { get; set; }
        public string license_image_file_large { get; set; }
        public string license_parent_id { get; set; }
        public List<object> tags { get; set; }
        public List<Genre> track_genres { get; set; }
    }

    public class TrackDataSet
    {
        public string title { get; set; }
        public string message { get; set; }
        public List<object> errors { get; set; }
        public string total { get; set; }
        public int total_pages { get; set; }
        public int page { get; set; }
        public int limit { get; set; }
        public List<Track> dataset { get; set; }
    }
}
