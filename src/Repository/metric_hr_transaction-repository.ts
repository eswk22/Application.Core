import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Metric_Hr_TransactionSchema} from './../Account/schema/metric_hr_transaction-schema';
import {Metric_Hr_Transaction} from './../Account/metric_hr_transaction';

export class Metric_Hr_TransactionRepository extends RepositoryBase<Metric_Hr_Transaction> implements IRepository<Metric_Hr_Transaction>  {
	constructor() {
		super(Metric_Hr_TransactionSchema);
	}
};

Object.seal(Metric_Hr_TransactionRepository);
