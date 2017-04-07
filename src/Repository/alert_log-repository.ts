import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Alert_LogSchema} from './../Account/schema/alert_log-schema';
import {Alert_Log} from './../Account/alert_log';

export class Alert_LogRepository extends RepositoryBase<Alert_Log> implements IRepository<Alert_Log>  {
	constructor() {
		super(Alert_LogSchema);
	}
};

Object.seal(Alert_LogRepository);
