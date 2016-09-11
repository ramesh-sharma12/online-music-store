using Store.Core;
using Store.Models;
using Store.Services.Impl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Services.Impl
{
    public class SongService : BaseService<Track>, ISongService
    {
        public SongService(IMongoDbManager dbManager) : base(dbManager)
        {

            var _mongoCollection = dbManager.GetCollection<Track>("songs");

            SetCollection(_mongoCollection);
        }
    }
}
