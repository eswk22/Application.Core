import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Hr_JvmSchema} from './../Account/schema/metric_hr_jvm-schema';
import {Metric_Hr_Jvm} from './../Account/metric_hr_jvm';

export class Metric_Hr_JvmRepository extends RepositoryBase<Metric_Hr_Jvm> implements IRepository<Metric_Hr_Jvm>  {
	constructor() {
		super(Metric_Hr_JvmSchema);
	}
};

Object.seal(Metric_Hr_JvmRepository);
