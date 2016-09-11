
import {IBaseEntity} from './baseEntity';
import {ISong} from './song';

export interface IPlaylist extends IBaseEntity {

    Name: string;

    Songs: Array<ISong>;
}
