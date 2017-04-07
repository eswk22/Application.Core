import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Day_JvmSchema} from './../Account/schema/metric_day_jvm-schema';
import {Metric_Day_Jvm} from './../Account/metric_day_jvm';

export class Metric_Day_JvmRepository extends RepositoryBase<Metric_Day_Jvm> implements IRepository<Metric_Day_Jvm>  {
	constructor() {
		super(Metric_Day_JvmSchema);
	}
};

Object.seal(Metric_Day_JvmRepository);
