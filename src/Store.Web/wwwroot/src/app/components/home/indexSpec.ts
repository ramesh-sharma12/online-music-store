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
import {Home} from  '../../components/home/index';
import {ProxyService} from '../../services/proxyService';

    describe('Home index component:', () => {
        var component: Home,
           songList: Array<ISong>,
            proxyService : ProxyService;

        var getTopMoviesPromise: Promise<Array<ISong>>;

        beforeEachProviders(() => {
            return [
            HTTP_PROVIDERS,
            provide(XHRBackend, {useClass: MockBackend}),
            ProxyService
            ];
        });

        beforeEach(() => {
            songList = new Array<ISong>();

            var song = <ISong>{};
                      
            songList.push(song);        
        });
        
        beforeEach(inject([XHRBackend, ProxyService], (mockBackend, proxySvc) => {
                proxyService = proxySvc;

                component = new Home(proxyService);           

                getTopMoviesPromise = new Promise<Array<ISong>>(function (resolve, reject) { resolve(songList) });

                spyOn(proxyService, "getTopMovies").and.returnValue(getTopMoviesPromise);
        })); 

        it("should initialize proxyService correctly", () =>
        {
            expect(proxyService).toBeDefined();
        });        

        it('should call getRecentlySearchedMovies on initialization', () => {
            component.getRecentlySearchedMovies();

            expect(proxyService.getRecentlySearchedSongs).toHaveBeenCalled();
        });

        it('should call getRecentlySearchedMovies on calling onInit function', () => {
            component.ngOnInit();

            expect(proxyService.getRecentlySearchedSongs).toHaveBeenCalled();
        });
    });