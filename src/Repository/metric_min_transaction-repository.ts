import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Min_TransactionSchema} from './../Account/schema/metric_min_transaction-schema';
import {Metric_Min_Transaction} from './../Account/metric_min_transaction';

export class Metric_Min_TransactionRepository extends RepositoryBase<Metric_Min_Transaction> implements IRepository<Metric_Min_Transaction>  {
	constructor() {
		super(Metric_Min_TransactionSchema);
	}
};

Object.seal(Metric_Min_TransactionRepository);
