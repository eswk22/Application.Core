import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Day_LatencySchema} from './../Account/schema/metric_day_latency-schema';
import {Metric_Day_Latency} from './../Account/metric_day_latency';

export class Metric_Day_LatencyRepository extends RepositoryBase<Metric_Day_Latency> implements IRepository<Metric_Day_Latency>  {
	constructor() {
		super(Metric_Day_LatencySchema);
	}
};

Object.seal(Metric_Day_LatencyRepository);
