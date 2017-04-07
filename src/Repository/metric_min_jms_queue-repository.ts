import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Min_Jms_QueueSchema} from './../Account/schema/metric_min_jms_queue-schema';
import {Metric_Min_Jms_Queue} from './../Account/metric_min_jms_queue';

export class Metric_Min_Jms_QueueRepository extends RepositoryBase<Metric_Min_Jms_Queue> implements IRepository<Metric_Min_Jms_Queue>  {
	constructor() {
		super(Metric_Min_Jms_QueueSchema);
	}
};

Object.seal(Metric_Min_Jms_QueueRepository);
