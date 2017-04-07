import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_FilterSchema} from './../Account/schema/meta_filter-schema';
import {Meta_Filter} from './../Account/meta_filter';

export class Meta_FilterRepository extends RepositoryBase<Meta_Filter> implements IRepository<Meta_Filter>  {
	constructor() {
		super(Meta_FilterSchema);
	}
};

Object.seal(Meta_FilterRepository);
