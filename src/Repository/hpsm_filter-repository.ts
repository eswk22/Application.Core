import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Hpsm_FilterSchema} from './../Account/schema/hpsm_filter-schema';
import {Hpsm_Filter} from './../Account/hpsm_filter';

export class Hpsm_FilterRepository extends RepositoryBase<Hpsm_Filter> implements IRepository<Hpsm_Filter>  {
	constructor() {
		super(Hpsm_FilterSchema);
	}
};

Object.seal(Hpsm_FilterRepository);
