import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {UserSchema} from '../Account/Sys_UserSchema';
import { ISys_User } from "../Account/interfaces/ISys_User";

export class UserRepository extends RepositoryBase<ISys_User> {
	constructor() {
		super(UserSchema); 
	}      
 
}

let  UserRepository1 : IRepository<ISys_User> = new RepositoryBase<ISys_User>(UserSchema);
Object.seal(UserRepository); 