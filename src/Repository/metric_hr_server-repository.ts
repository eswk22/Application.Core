import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Hr_ServerSchema} from './../Account/schema/metric_hr_server-schema';
import {Metric_Hr_Server} from './../Account/metric_hr_server';

export class Metric_Hr_ServerRepository extends RepositoryBase<Metric_Hr_Server> implements IRepository<Metric_Hr_Server>  {
	constructor() {
		super(Metric_Hr_ServerSchema);
	}
};

Object.seal(Metric_Hr_ServerRepository);
