
import {Component, ProviderBuilder, OnInit, OnChanges, Injector, Injectable} from '@angular/core';
import {RouteConfig, RouterLink, RootRouter} from '@angular/router-deprecated';
import {ProxyService} from '../../services/proxyService';
import {IGenre} from '../../models/genre';

@Component({
    selector: 'sidenav-component',
    template: require('./sideNav.html'),
    directives: [RouterLink]
})

export class SideNav  //extends Base 
{
    private proxyService: ProxyService;
    private genres: Array<IGenre>;

    constructor(proxyService: ProxyService)
    {
        //, public router: Router
        //super('home');
        this.proxyService = proxyService;
        this.genres = new Array<IGenre>();

        this.getGenres();
    }

    getGenres() {
        this.proxyService.getGenres().then((response) => {
            this.genres = response;
        });     
    }

    getDetails(event, id)
    {
       //this.router.parent.navigate('/movies/detail/' + id);
    }    
}