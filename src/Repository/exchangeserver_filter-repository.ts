import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Exchangeserver_FilterSchema} from './../Account/schema/exchangeserver_filter-schema';
import {Exchangeserver_Filter} from './../Account/exchangeserver_filter';

export class Exchangeserver_FilterRepository extends RepositoryBase<Exchangeserver_Filter> implements IRepository<Exchangeserver_Filter>  {
	constructor() {
		super(Exchangeserver_FilterSchema);
	}
};

Object.seal(Exchangeserver_FilterRepository);
