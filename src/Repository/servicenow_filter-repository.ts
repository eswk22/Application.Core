import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Servicenow_FilterSchema} from './../Account/schema/servicenow_filter-schema';
import {Servicenow_Filter} from './../Account/servicenow_filter';

export class Servicenow_FilterRepository extends RepositoryBase<Servicenow_Filter> implements IRepository<Servicenow_Filter>  {
	constructor() {
		super(Servicenow_FilterSchema);
	}
};

Object.seal(Servicenow_FilterRepository);
