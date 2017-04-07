import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Day_DatabaseSchema} from './../Account/schema/metric_day_database-schema';
import {Metric_Day_Database} from './../Account/metric_day_database';

export class Metric_Day_DatabaseRepository extends RepositoryBase<Metric_Day_Database> implements IRepository<Metric_Day_Database>  {
	constructor() {
		super(Metric_Day_DatabaseSchema);
	}
};

Object.seal(Metric_Day_DatabaseRepository);
