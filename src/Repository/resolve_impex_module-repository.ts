import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Impex_ModuleSchema} from './../Account/schema/resolve_impex_module-schema';
import {Resolve_Impex_Module} from './../Account/resolve_impex_module';

export class Resolve_Impex_ModuleRepository extends RepositoryBase<Resolve_Impex_Module> implements IRepository<Resolve_Impex_Module>  {
	constructor() {
		super(Resolve_Impex_ModuleSchema);
	}
};

Object.seal(Resolve_Impex_ModuleRepository);
