import {Component, ProviderBuilder, OnInit, OnChanges, Injector,Injectable} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {RouteConfig, RouterLink, RootRouter} from '@angular/router-deprecated';
import { FormBuilder, ControlGroup, NgModel, NgFor, NgIf, NgControl } from '@angular/common';
import {Http,} from '@angular/http';

import {Validators, } from '@angular/common';
import {ProxyService} from '../../services/proxyService';
import {ISong} from '../../models/song';

import {Base} from '../../base';


@Component({
    selector: 'component-1',
    template: require('./index.html'),
    directives: [RouterLink, NgFor, NgIf]
})

export class Home implements OnInit //extends Base 
{
    private proxyService: ProxyService;
    private songs: Array<ISong>;

    constructor(proxyService: ProxyService)
    {
        //, public router: Router
        //super('home');
        this.proxyService = proxyService;
        this.songs = new Array<ISong>();
    }

    getRecentlySearchedMovies() {
        this.proxyService.getRecentlySearchedSongs().then((response) => {
            this.songs = response;
        });     
    }

    getDetails(event, id)
    {
       //this.router.parent.navigate('/movies/detail/' + id);
    }

    ngOnInit() {
        this.getRecentlySearchedMovies();
    }
}