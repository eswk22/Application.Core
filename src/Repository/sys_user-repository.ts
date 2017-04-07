import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Sys_UserSchema} from './../Account/schema/sys_user-schema';
import {Sys_User} from './../Account/sys_user';

export class Sys_UserRepository extends RepositoryBase<Sys_User> implements IRepository<Sys_User>  {
	constructor() {
		super(Sys_UserSchema);
	}
};

Object.seal(Sys_UserRepository);
