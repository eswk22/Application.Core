import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Emailserver_FilterSchema} from './../Account/schema/emailserver_filter-schema';
import {Emailserver_Filter} from './../Account/emailserver_filter';

export class Emailserver_FilterRepository extends RepositoryBase<Emailserver_Filter> implements IRepository<Emailserver_Filter>  {
	constructor() {
		super(Emailserver_FilterSchema);
	}
};

Object.seal(Emailserver_FilterRepository);
