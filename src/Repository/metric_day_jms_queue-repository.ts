import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Day_Jms_QueueSchema} from './../Account/schema/metric_day_jms_queue-schema';
import {Metric_Day_Jms_Queue} from './../Account/metric_day_jms_queue';

export class Metric_Day_Jms_QueueRepository extends RepositoryBase<Metric_Day_Jms_Queue> implements IRepository<Metric_Day_Jms_Queue>  {
	constructor() {
		super(Metric_Day_Jms_QueueSchema);
	}
};

Object.seal(Metric_Day_Jms_QueueRepository);
