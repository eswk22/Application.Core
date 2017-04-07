import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Sys_ScriptSchema} from './../Account/schema/resolve_sys_script-schema';
import {Resolve_Sys_Script} from './../Account/resolve_sys_script';

export class Resolve_Sys_ScriptRepository extends RepositoryBase<Resolve_Sys_Script> implements IRepository<Resolve_Sys_Script>  {
	constructor() {
		super(Resolve_Sys_ScriptSchema);
	}
};

Object.seal(Resolve_Sys_ScriptRepository);
