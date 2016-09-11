
import {IBaseEntity} from './baseEntity';
import {ISong} from './song';

export interface IAlbum extends IBaseEntity
{
    Name: string;

    Description: string;

    ReleaseDate: Date;

    Songs : Array<ISong>
}
