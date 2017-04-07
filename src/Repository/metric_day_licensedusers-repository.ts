import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Day_LicensedusersSchema} from './../Account/schema/metric_day_licensedusers-schema';
import {Metric_Day_Licensedusers} from './../Account/metric_day_licensedusers';

export class Metric_Day_LicensedusersRepository extends RepositoryBase<Metric_Day_Licensedusers> implements IRepository<Metric_Day_Licensedusers>  {
	constructor() {
		super(Metric_Day_LicensedusersSchema);
	}
};

Object.seal(Metric_Day_LicensedusersRepository);
