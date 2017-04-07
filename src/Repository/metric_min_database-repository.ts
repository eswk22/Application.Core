import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Min_DatabaseSchema} from './../Account/schema/metric_min_database-schema';
import {Metric_Min_Database} from './../Account/metric_min_database';

export class Metric_Min_DatabaseRepository extends RepositoryBase<Metric_Min_Database> implements IRepository<Metric_Min_Database>  {
	constructor() {
		super(Metric_Min_DatabaseSchema);
	}
};

Object.seal(Metric_Min_DatabaseRepository);
