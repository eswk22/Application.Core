import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Hr_LatencySchema} from './../Account/schema/metric_hr_latency-schema';
import {Metric_Hr_Latency} from './../Account/metric_hr_latency';

export class Metric_Hr_LatencyRepository extends RepositoryBase<Metric_Hr_Latency> implements IRepository<Metric_Hr_Latency>  {
	constructor() {
		super(Metric_Hr_LatencySchema);
	}
};

Object.seal(Metric_Hr_LatencyRepository);
