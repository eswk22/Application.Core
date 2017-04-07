import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Gateway_LogSchema} from './../Account/schema/gateway_log-schema';
import {Gateway_Log} from './../Account/gateway_log';

export class Gateway_LogRepository extends RepositoryBase<Gateway_Log> implements IRepository<Gateway_Log>  {
	constructor() {
		super(Gateway_LogSchema);
	}
};

Object.seal(Gateway_LogRepository);
