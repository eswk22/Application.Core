import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Day_TransactionSchema} from './../Account/schema/metric_day_transaction-schema';
import {Metric_Day_Transaction} from './../Account/metric_day_transaction';

export class Metric_Day_TransactionRepository extends RepositoryBase<Metric_Day_Transaction> implements IRepository<Metric_Day_Transaction>  {
	constructor() {
		super(Metric_Day_TransactionSchema);
	}
};

Object.seal(Metric_Day_TransactionRepository);
