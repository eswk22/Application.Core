import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Remedyx_FilterSchema} from './../Account/schema/remedyx_filter-schema';
import {Remedyx_Filter} from './../Account/remedyx_filter';

export class Remedyx_FilterRepository extends RepositoryBase<Remedyx_Filter> implements IRepository<Remedyx_Filter>  {
	constructor() {
		super(Remedyx_FilterSchema);
	}
};

Object.seal(Remedyx_FilterRepository);
