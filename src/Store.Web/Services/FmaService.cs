using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Store.Models;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Store.Web.ViewModel;

namespace Store.Web.Services
{
    public class FmaService : IFmaService
    {
        private readonly string _rootPath = Directory.GetCurrentDirectory();

        public AlbumDataSet GetAlbums()
        {           
            AlbumDataSet dSet = new AlbumDataSet();
            var albumPath = _rootPath + "/data/albums.json";

            using (StreamReader file = File.OpenText(albumPath))
            using (JsonTextReader reader = new JsonTextReader(file))
            {
                JsonSerializer serializer = new JsonSerializer();
                dSet = (AlbumDataSet)serializer.Deserialize(file, typeof(AlbumDataSet));
            }

            return dSet;
        }

        public TrackDataSet GetSongs()
        {
            TrackDataSet dSet = new TrackDataSet();
            var albumPath = _rootPath + "/data/tracks.json";

            using (StreamReader file = File.OpenText(albumPath))
            using (JsonTextReader reader = new JsonTextReader(file))
            {
                JsonSerializer serializer = new JsonSerializer();
                dSet = (TrackDataSet)serializer.Deserialize(file, typeof(TrackDataSet));
            }

            return dSet;
        }

        public ArtistDataSet GetArtists()
        {
            ArtistDataSet dSet = new ArtistDataSet();
            var albumPath = _rootPath + "/data/artists.json";

            using (StreamReader file = File.OpenText(albumPath))
            using (JsonTextReader reader = new JsonTextReader(file))
            {
                JsonSerializer serializer = new JsonSerializer();
                dSet = (ArtistDataSet)serializer.Deserialize(file, typeof(ArtistDataSet));
            }

            return dSet;
        }

        public RecentTracks GetRecentSongs()
        {
            RecentTracks dSet = new RecentTracks();
            var albumPath = _rootPath + "/data/recent.json";

            using (StreamReader file = File.OpenText(albumPath))
            using (JsonTextReader reader = new JsonTextReader(file))
            {
                JsonSerializer serializer = new JsonSerializer();
                dSet = (RecentTracks)serializer.Deserialize(file, typeof(RecentTracks));
            }

            return dSet;
        }

        public RecentTracks GetFeaturedSong()
        {
            RecentTracks dSet = new RecentTracks();
            var albumPath = _rootPath + "/data/featured.json";

            using (StreamReader file = File.OpenText(albumPath))
            using (JsonTextReader reader = new JsonTextReader(file))
            {
                JsonSerializer serializer = new JsonSerializer();
                dSet = (RecentTracks)serializer.Deserialize(file, typeof(RecentTracks));
            }

            return dSet;
        }

        public GenreDataSet GetGenres()
        {
            GenreDataSet dSet = new GenreDataSet();
            var albumPath = _rootPath + "/data/genres.json";

            using (StreamReader file = File.OpenText(albumPath))
            using (JsonTextReader reader = new JsonTextReader(file))
            {
                JsonSerializer serializer = new JsonSerializer();
                dSet = (GenreDataSet)serializer.Deserialize(file, typeof(GenreDataSet));
            }

            return dSet;
        }       

        public List<Album> Search()
        {
            throw new NotImplementedException();
        }
    }
}
