import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Hr_Jms_QueueSchema} from './../Account/schema/metric_hr_jms_queue-schema';
import {Metric_Hr_Jms_Queue} from './../Account/metric_hr_jms_queue';

export class Metric_Hr_Jms_QueueRepository extends RepositoryBase<Metric_Hr_Jms_Queue> implements IRepository<Metric_Hr_Jms_Queue>  {
	constructor() {
		super(Metric_Hr_Jms_QueueSchema);
	}
};

Object.seal(Metric_Hr_Jms_QueueRepository);
