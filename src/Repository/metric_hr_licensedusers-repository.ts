import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Hr_LicensedusersSchema} from './../Account/schema/metric_hr_licensedusers-schema';
import {Metric_Hr_Licensedusers} from './../Account/metric_hr_licensedusers';

export class Metric_Hr_LicensedusersRepository extends RepositoryBase<Metric_Hr_Licensedusers> implements IRepository<Metric_Hr_Licensedusers>  {
	constructor() {
		super(Metric_Hr_LicensedusersSchema);
	}
};

Object.seal(Metric_Hr_LicensedusersRepository);
