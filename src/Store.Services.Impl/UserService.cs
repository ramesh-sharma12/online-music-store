using Store.Core;
using Store.Models;
using Store.Services.Impl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Services.Impl
{
    public class UserService : BaseService<User>, IUserService
    {
        public UserService(IMongoDbManager dbManager) : base(dbManager)
        {
            var _mongoCollection = dbManager.GetCollection<User>("users");

           SetCollection(_mongoCollection);
        }

    }
}
