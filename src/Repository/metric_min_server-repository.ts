import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Min_ServerSchema} from './../Account/schema/metric_min_server-schema';
import {Metric_Min_Server} from './../Account/metric_min_server';

export class Metric_Min_ServerRepository extends RepositoryBase<Metric_Min_Server> implements IRepository<Metric_Min_Server>  {
	constructor() {
		super(Metric_Min_ServerSchema);
	}
};

Object.seal(Metric_Min_ServerRepository);
