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
import {SongDetails} from './details';

import {Home} from  '../../components/home/index';
import {ProxyService} from '../../services/proxyService';


    describe('Home index component:', () => {
        var component: SongDetails,
            movie: ISong,            
            proxyService: ProxyService;

        var getMovieByIdPromise: Promise<ISong>;

        beforeEachProviders(() => {
            return [
            HTTP_PROVIDERS,
            provide(XHRBackend, {useClass: MockBackend}),
            ProxyService
            ];
        });

        beforeEach(() => {       
            movie = <ISong>{};
          
             
        });

       beforeEach(inject([XHRBackend, ProxyService], (mockBackend, proxySvc) => {
                proxyService = proxySvc;

                component = new SongDetails(proxyService,null);           

                getMovieByIdPromise = new Promise<ISong>(function (resolve, reject) { resolve(movie) });

                spyOn(proxyService, "getMovieById").and.returnValue(getMovieByIdPromise);
        })); 

        it("should initialize proxyService correctly", () => {
            expect(proxyService).toBeDefined();
        });

        it('should call getTopMovies on initialization', () => {
            component.getMovieDetails();

            expect(proxyService.getSongById).toHaveBeenCalled();
        });

        it('should call getTopMovies on calling onInit function', () => {
            component.ngOnInit();

            expect(proxyService.getSongById).toHaveBeenCalled();
        });
    });