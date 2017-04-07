import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Hr_DatabaseSchema} from './../Account/schema/metric_hr_database-schema';
import {Metric_Hr_Database} from './../Account/metric_hr_database';

export class Metric_Hr_DatabaseRepository extends RepositoryBase<Metric_Hr_Database> implements IRepository<Metric_Hr_Database>  {
	constructor() {
		super(Metric_Hr_DatabaseSchema);
	}
};

Object.seal(Metric_Hr_DatabaseRepository);
