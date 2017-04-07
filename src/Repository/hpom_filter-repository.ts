import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Hpom_FilterSchema} from './../Account/schema/hpom_filter-schema';
import {Hpom_Filter} from './../Account/hpom_filter';

export class Hpom_FilterRepository extends RepositoryBase<Hpom_Filter> implements IRepository<Hpom_Filter>  {
	constructor() {
		super(Hpom_FilterSchema);
	}
};

Object.seal(Hpom_FilterRepository);
