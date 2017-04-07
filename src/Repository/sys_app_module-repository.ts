import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Sys_App_ModuleSchema} from './../Account/schema/sys_app_module-schema';
import {Sys_App_Module} from './../Account/sys_app_module';

export class Sys_App_ModuleRepository extends RepositoryBase<Sys_App_Module> implements IRepository<Sys_App_Module>  {
	constructor() {
		super(Sys_App_ModuleSchema);
	}
};

Object.seal(Sys_App_ModuleRepository);
