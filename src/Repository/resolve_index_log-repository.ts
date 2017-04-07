import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Index_LogSchema} from './../Account/schema/resolve_index_log-schema';
import {Resolve_Index_Log} from './../Account/resolve_index_log';

export class Resolve_Index_LogRepository extends RepositoryBase<Resolve_Index_Log> implements IRepository<Resolve_Index_Log>  {
	constructor() {
		super(Resolve_Index_LogSchema);
	}
};

Object.seal(Resolve_Index_LogRepository);
