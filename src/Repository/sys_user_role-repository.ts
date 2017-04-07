import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Sys_User_RoleSchema} from './../Account/schema/sys_user_role-schema';
import {Sys_User_Role} from './../Account/sys_user_role';

export class Sys_User_RoleRepository extends RepositoryBase<Sys_User_Role> implements IRepository<Sys_User_Role>  {
	constructor() {
		super(Sys_User_RoleSchema);
	}
};

Object.seal(Sys_User_RoleRepository);
