import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Ews_FilterSchema} from './../Account/schema/ews_filter-schema';
import {Ews_Filter} from './../Account/ews_filter';

export class Ews_FilterRepository extends RepositoryBase<Ews_Filter> implements IRepository<Ews_Filter>  {
	constructor() {
		super(Ews_FilterSchema);
	}
};

Object.seal(Ews_FilterRepository);
