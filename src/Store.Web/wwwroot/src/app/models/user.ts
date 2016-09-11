
import {IBaseEntity} from './baseEntity';

export interface IUser extends IBaseEntity {  

    FullName: string;

    LogonName: string;

    Password: string;

    Hint: string;
}
