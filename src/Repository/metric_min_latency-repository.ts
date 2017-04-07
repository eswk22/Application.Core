import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Min_LatencySchema} from './../Account/schema/metric_min_latency-schema';
import {Metric_Min_Latency} from './../Account/metric_min_latency';

export class Metric_Min_LatencyRepository extends RepositoryBase<Metric_Min_Latency> implements IRepository<Metric_Min_Latency>  {
	constructor() {
		super(Metric_Min_LatencySchema);
	}
};

Object.seal(Metric_Min_LatencyRepository);
