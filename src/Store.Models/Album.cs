using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Models
{
    public class AlbumImage
    {
        public string image_id { get; set; }
        public object user_id { get; set; }
        public object artist_id { get; set; }
        public string album_id { get; set; }
        public object curator_id { get; set; }
        public string image_file { get; set; }
        public string image_title { get; set; }
        public string image_caption { get; set; }
        public string image_copyright { get; set; }
        public string image_source { get; set; }
        public string image_order { get; set; }
    }

    public class Album : BaseEntity
    {
        public string album_id { get; set; }
        public string album_title { get; set; }
        public string album_handle { get; set; }
        public string album_url { get; set; }
        public string album_type { get; set; }
        public string artist_name { get; set; }
        public string artist_url { get; set; }
        public object album_producer { get; set; }
        public object album_engineer { get; set; }
        public string album_information { get; set; }
        public string album_date_released { get; set; }
        public string album_comments { get; set; }
        public string album_favorites { get; set; }
        public string album_tracks { get; set; }
        public string album_listens { get; set; }
        public string album_date_created { get; set; }
        public string album_image_file { get; set; }
        public List<AlbumImage> album_images { get; set; }
        public List<object> tags { get; set; }
    }

    public class AlbumDataSet
    {
        public string title { get; set; }
        public string message { get; set; }
        public List<object> errors { get; set; }
        public string total { get; set; }
        public int total_pages { get; set; }
        public int page { get; set; }
        public int limit { get; set; }
        public List<Album> dataset { get; set; }
    }
}
