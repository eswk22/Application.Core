import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Tsrm_FilterSchema} from './../Account/schema/tsrm_filter-schema';
import {Tsrm_Filter} from './../Account/tsrm_filter';

export class Tsrm_FilterRepository extends RepositoryBase<Tsrm_Filter> implements IRepository<Tsrm_Filter>  {
	constructor() {
		super(Tsrm_FilterSchema);
	}
};

Object.seal(Tsrm_FilterRepository);
