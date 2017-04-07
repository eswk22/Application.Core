import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Min_JvmSchema} from './../Account/schema/metric_min_jvm-schema';
import {Metric_Min_Jvm} from './../Account/metric_min_jvm';

export class Metric_Min_JvmRepository extends RepositoryBase<Metric_Min_Jvm> implements IRepository<Metric_Min_Jvm>  {
	constructor() {
		super(Metric_Min_JvmSchema);
	}
};

Object.seal(Metric_Min_JvmRepository);
