import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Execute_LogSchema} from './../Account/schema/resolve_execute_log-schema';
import {Resolve_Execute_Log} from './../Account/resolve_execute_log';

export class Resolve_Execute_LogRepository extends RepositoryBase<Resolve_Execute_Log> implements IRepository<Resolve_Execute_Log>  {
	constructor() {
		super(Resolve_Execute_LogSchema);
	}
};

Object.seal(Resolve_Execute_LogRepository);
