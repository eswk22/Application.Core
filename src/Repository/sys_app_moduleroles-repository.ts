import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Sys_App_ModulerolesSchema} from './../Account/schema/sys_app_moduleroles-schema';
import {Sys_App_Moduleroles} from './../Account/sys_app_moduleroles';

export class Sys_App_ModulerolesRepository extends RepositoryBase<Sys_App_Moduleroles> implements IRepository<Sys_App_Moduleroles>  {
	constructor() {
		super(Sys_App_ModulerolesSchema);
	}
};

Object.seal(Sys_App_ModulerolesRepository);
