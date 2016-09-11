
import {Component,OnInit, OnChanges} from '@angular/core';
import {Router} from '@angular/router';
import { NgFor, NgIf} from '@angular/common';
import {RouteConfig, RouterLink, RootRouter} from '@angular/router-deprecated';
import {ProxyService} from '../../services/proxyService';
import {Base} from '../../base';
import {ISong, ISongDataSet} from '../../models/Song';

@Component({
    selector: 'component-1',
    template: require('./index.html'),
    directives: [RouterLink, NgFor, NgIf]
})

export class SongIndex implements OnInit//extends Base
{
    private proxyService: ProxyService;
    private model: ISong;  
    private summary : ISongDataSet;
    private songs: Array<ISong>;

    constructor(proxyService: ProxyService) {
        //super('movies'); , public router : Router
        this.proxyService = proxyService;
        this.songs = new Array<ISong>();

        this.model = <ISong>{};
    }

    getSongs() {
        this.proxyService.getSongs(null, null).then((response) => {
            if(response){
                this.summary = response;    
                this.songs = response.dataset;    
            }
        });

        //this.proxyService.getSongs()
        //    .map(r => r.json())
        //    .subscribe(a => {
        //    this.movies = a;
        //});
    }

    getDetails(event, id: string) {
        window.location.href = '/movies/detail/' + id;
    }

    onSubmit() {
        var self = this;

        this.proxyService.searchExternalSongs(this.model).then((response) => {
            self.songs = response;
        });
    }

    ngOnInit() {
        this.getSongs();
    }
}