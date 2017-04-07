import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Database_ConnectionpoolSchema} from './../Account/schema/database_connectionpool-schema';
import {Database_Connectionpool} from './../Account/database_connectionpool';

export class Database_ConnectionpoolRepository extends RepositoryBase<Database_Connectionpool> implements IRepository<Database_Connectionpool>  {
	constructor() {
		super(Database_ConnectionpoolSchema);
	}
};

Object.seal(Database_ConnectionpoolRepository);
