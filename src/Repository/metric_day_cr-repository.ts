import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Day_CrSchema} from './../Account/schema/metric_day_cr-schema';
import {Metric_Day_Cr} from './../Account/metric_day_cr';

export class Metric_Day_CrRepository extends RepositoryBase<Metric_Day_Cr> implements IRepository<Metric_Day_Cr>  {
	constructor() {
		super(Metric_Day_CrSchema);
	}
};

Object.seal(Metric_Day_CrRepository);
