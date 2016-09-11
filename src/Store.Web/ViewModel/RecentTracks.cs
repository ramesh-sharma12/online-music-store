using Store.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Web.ViewModel
{  

    public class RecentTracks
    {
        public string content { get; set; }       
        public string title { get; set; }
        public string page_cache_key { get; set; }
        public string page_title { get; set; }
        public List<object> oNav { get; set; }
        public List<Genre> nav_genres { get; set; }
        public List<Curator> nav_curators { get; set; }
        public bool bAuth { get; set; }
        public bool bManage { get; set; }
        public string sSearch { get; set; }
        public List<object> aMailForm { get; set; }
        public List<Track> aTracks { get; set; }
    }
}
