import {Component,OnInit, OnChanges, Optional} from '@angular/core';
//import {RouteConfig, RouterLink, RootRouter, RouteSegment} from '@angular/router-deprecated';
import {RouterLink, ActivatedRoute} from '@angular/router';
import {NgFor, NgIf} from '@angular/common';

import {ProxyService} from '../../services/proxyService';
import {Base} from '../../base';
import {ISong} from '../../models/Song';

@Component({
    selector: 'component-1',
    template: require('./details.html'),
    directives: [RouterLink, NgFor, NgIf]
})

export class SongDetails implements OnInit//extends Base
{
    private proxyService: ProxyService;
    private song: ISong;
    private route : ActivatedRoute;

    constructor(proxyService: ProxyService, @Optional() route: ActivatedRoute)
    {  
        //super('movies');
        this.route = route;
        this.proxyService = proxyService; 
        this.song =  <ISong>{}; 
    }

    getMovieDetails()
    {       
      
        //this.route.params
        //    .map(params => params['id'])
        //    .subscribe((id) => {
        //        this.proxyService.getExternalSongs(id).then((response) =>
        //        {           
        //            this.song = response;
        //        });
        //});
    }

    ngOnInit()
    {
        this.getMovieDetails();
    }   
}