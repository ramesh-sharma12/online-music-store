
import {Injectable} from '@angular/core';
import {Http, Request} from '@angular/http';
import {ISong, ISongDataSet} from '../models/song';
import {IGenre} from '../models/genre';

export interface IProxyService {
    getSongById(id: string): Promise<ISong>;
    getExternalSongs(id: string): Promise<ISong>;
    getRecentlySearchedSongs(): Promise<Array<ISong>>; 
    getSongs(sortKey: string, sortOrder: string): Promise<ISongDataSet>;
    getGenres(): Promise<Array<IGenre>>;
    searchExternalSongs(params: Object): Promise<Array<ISong>> ;
}

@Injectable()
export class ProxyService implements IProxyService {

    private http: Http;

    public constructor(http: Http) {
        this.http = http;
    }

    public getSongById(id: string) : Promise<ISong> {
        var httpService = this.http;
        return new Promise<ISong>(function (resolve, reject) {
            httpService.get('http://localhost:8000/api/movies/get/' + id).subscribe(res => resolve(res.json()));
        });
    }

    public getSongs(sortKey: string, sortOrder: string): Promise<ISongDataSet> {
        var httpService = this.http;

            return new Promise<ISongDataSet>(function (resolve, reject) {
                httpService.request('http://localhost:5000/api/songs').subscribe(res => resolve(res.json()));
            });
    }

     public getGenres(): Promise<Array<IGenre>> {
        var httpService = this.http;

            return new Promise<Array<IGenre>>(function (resolve, reject) {
                httpService.request('http://localhost:5000/api/genres').subscribe(res => resolve(res.json()));
            });
    }


    public getRecentlySearchedSongs(): Promise<Array<ISong>> {
        var httpService = this.http;

        return new Promise<Array<ISong>>(function (resolve, reject) {
            httpService.request('http://localhost:5000/api/songs/recent').subscribe(res => resolve(res.json()));
        });
    }

    public getExternalSongs(id: string): Promise<ISong> {
        var httpService = this.http;
        var queryString = 'imdb=' + id;

        return new Promise<ISong>(function (resolve, reject) {
            httpService.request('http://localhost:8000/api/imdb', {search : queryString }).subscribe(res => resolve(res.json()));
        });
    }

    public searchExternalSongs(params: any): Promise<Array<ISong>> {
        var httpService = this.http;
        
        var queryString = 'title=' + params.title + '&year=' + params.year + '&type=' + params.type;

        return new Promise<Array<ISong>>(function (resolve, reject) {
            httpService.request('http://localhost:8000/api/imdb/search', {search : queryString }).subscribe(res => resolve(res.json()));
        });
    }
}

