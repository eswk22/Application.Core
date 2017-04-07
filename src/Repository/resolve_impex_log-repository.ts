import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Impex_LogSchema} from './../Account/schema/resolve_impex_log-schema';
import {Resolve_Impex_Log} from './../Account/resolve_impex_log';

export class Resolve_Impex_LogRepository extends RepositoryBase<Resolve_Impex_Log> implements IRepository<Resolve_Impex_Log>  {
	constructor() {
		super(Resolve_Impex_LogSchema);
	}
};

Object.seal(Resolve_Impex_LogRepository);
