import {
  describe,
  expect,
  beforeEach,
  it,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import {Http, Headers, HTTP_PROVIDERS, BaseRequestOptions,
        XHRBackend, Response} from '@angular/http';
import {ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

import {bind} from '@angular/core';
import {Injector, provide} from '@angular/core';

import {ISong} from '../../models/song';
import {SongIndex} from './index';

import {Home} from  '../../components/home/index';
import {ProxyService} from '../../services/proxyService';

    describe('Home index component:', () => {
        var component: SongIndex,
            movieList: Array<ISong>,
            proxyService: ProxyService;

        var getTopMoviesPromise: Promise<Array<ISong>>;

        beforeEachProviders(() => {
                    return [
                    HTTP_PROVIDERS,
                    provide(XHRBackend, {useClass: MockBackend}),
                    ProxyService
                    ];
        });

        beforeEach(() => {
            movieList = new Array<ISong>();

            var song = <ISong>{};          
           
            movieList.push(song);
        });

        beforeEach(inject([XHRBackend, ProxyService], (mockBackend, proxySvc) => {
                proxyService = proxySvc;

                component = new SongIndex(proxyService);           

               getTopMoviesPromise = new Promise<Array<ISong>>(function (resolve, reject) { resolve(movieList) });

                spyOn(proxyService, "getMovies").and.returnValue(getTopMoviesPromise);
        }));

        it("should initialize proxyService correctly", () => {
            expect(proxyService).toBeDefined();
        });

        it('should call getMovies on initialization', () => {
            component.getSongs();

            expect(proxyService.getSongs).toHaveBeenCalled();
        });

        it('should call getMovies on calling onInit function', () => {
            component.ngOnInit();

            expect(proxyService.getSongs).toHaveBeenCalled();
        });   
       
    });