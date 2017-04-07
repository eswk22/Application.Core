import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Hr_CrSchema} from './../Account/schema/metric_hr_cr-schema';
import {Metric_Hr_Cr} from './../Account/metric_hr_cr';

export class Metric_Hr_CrRepository extends RepositoryBase<Metric_Hr_Cr> implements IRepository<Metric_Hr_Cr>  {
	constructor() {
		super(Metric_Hr_CrSchema);
	}
};

Object.seal(Metric_Hr_CrRepository);
