import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Sys_App_ApplicationSchema} from './../Account/schema/sys_app_application-schema';
import {Sys_App_Application} from './../Account/sys_app_application';

export class Sys_App_ApplicationRepository extends RepositoryBase<Sys_App_Application> implements IRepository<Sys_App_Application>  {
	constructor() {
		super(Sys_App_ApplicationSchema);
	}
};

Object.seal(Sys_App_ApplicationRepository);
