import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Sys_App_ApplicationrolesSchema} from './../Account/schema/sys_app_applicationroles-schema';
import {Sys_App_Applicationroles} from './../Account/sys_app_applicationroles';

export class Sys_App_ApplicationrolesRepository extends RepositoryBase<Sys_App_Applicationroles> implements IRepository<Sys_App_Applicationroles>  {
	constructor() {
		super(Sys_App_ApplicationrolesSchema);
	}
};

Object.seal(Sys_App_ApplicationrolesRepository);
