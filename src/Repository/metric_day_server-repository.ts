import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Day_ServerSchema} from './../Account/schema/metric_day_server-schema';
import {Metric_Day_Server} from './../Account/metric_day_server';

export class Metric_Day_ServerRepository extends RepositoryBase<Metric_Day_Server> implements IRepository<Metric_Day_Server>  {
	constructor() {
		super(Metric_Day_ServerSchema);
	}
};

Object.seal(Metric_Day_ServerRepository);
