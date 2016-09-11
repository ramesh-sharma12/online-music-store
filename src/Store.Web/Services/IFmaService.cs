using Store.Models;
using Store.Web.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Web.Services
{
    public interface IFmaService
    {
        AlbumDataSet GetAlbums();

        TrackDataSet GetSongs();

        ArtistDataSet GetArtists();

        RecentTracks GetRecentSongs();

        RecentTracks GetFeaturedSong();

        GenreDataSet GetGenres();
    }
}
