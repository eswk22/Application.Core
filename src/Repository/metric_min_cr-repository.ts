import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Min_CrSchema} from './../Account/schema/metric_min_cr-schema';
import {Metric_Min_Cr} from './../Account/metric_min_cr';

export class Metric_Min_CrRepository extends RepositoryBase<Metric_Min_Cr> implements IRepository<Metric_Min_Cr>  {
	constructor() {
		super(Metric_Min_CrSchema);
	}
};

Object.seal(Metric_Min_CrRepository);
