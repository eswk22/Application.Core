import {RepositoryBase} from './Base/RepositoryBase';
import {UserSchema} from '../Account/Sys_UserSchema';
import { ISys_UserModel } from "../Account/Sys_UserModel";

export class UserRepository extends RepositoryBase<ISys_UserModel> {
	constructor() {
		super(UserSchema); 
	}    

}

Object.seal(UserRepository); 