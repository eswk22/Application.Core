import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Audit_LogSchema} from './../Account/schema/audit_log-schema';
import {Audit_Log} from './../Account/audit_log';

export class Audit_LogRepository extends RepositoryBase<Audit_Log> implements IRepository<Audit_Log>  {
	constructor() {
		super(Audit_LogSchema);
	}
};

Object.seal(Audit_LogRepository);
