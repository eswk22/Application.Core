import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_CronSchema} from './../Account/schema/resolve_cron-schema';
import {Resolve_Cron} from './../Account/resolve_cron';

export class Resolve_CronRepository extends RepositoryBase<Resolve_Cron> implements IRepository<Resolve_Cron>  {
	constructor() {
		super(Resolve_CronSchema);
	}
};

Object.seal(Resolve_CronRepository);
