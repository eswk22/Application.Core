import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Database_FilterSchema} from './../Account/schema/database_filter-schema';
import {Database_Filter} from './../Account/database_filter';

export class Database_FilterRepository extends RepositoryBase<Database_Filter> implements IRepository<Database_Filter>  {
	constructor() {
		super(Database_FilterSchema);
	}
};

Object.seal(Database_FilterRepository);
