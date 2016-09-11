using Microsoft.Extensions.DependencyInjection;
using Store.Core;
using Store.Services;
using Store.Services.Impl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Web.Helpers
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection RegisterServices(
            this IServiceCollection services)
        {
            services.AddTransient<ISongService, SongService>();
            services.AddTransient<IMongoDbManager, MongoDbManager>();
            // and a lot more Services

            return services;
        }
    }
}
