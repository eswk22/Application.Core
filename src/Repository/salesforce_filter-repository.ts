import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Salesforce_FilterSchema} from './../Account/schema/salesforce_filter-schema';
import {Salesforce_Filter} from './../Account/salesforce_filter';

export class Salesforce_FilterRepository extends RepositoryBase<Salesforce_Filter> implements IRepository<Salesforce_Filter>  {
	constructor() {
		super(Salesforce_FilterSchema);
	}
};

Object.seal(Salesforce_FilterRepository);
