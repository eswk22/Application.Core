import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Min_LicensedusersSchema} from './../Account/schema/metric_min_licensedusers-schema';
import {Metric_Min_Licensedusers} from './../Account/metric_min_licensedusers';

export class Metric_Min_LicensedusersRepository extends RepositoryBase<Metric_Min_Licensedusers> implements IRepository<Metric_Min_Licensedusers>  {
	constructor() {
		super(Metric_Min_LicensedusersSchema);
	}
};

Object.seal(Metric_Min_LicensedusersRepository);
