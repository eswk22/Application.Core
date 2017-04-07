import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Custom_TableSchema} from './../Account/schema/custom_table-schema';
import {Custom_Table} from './../Account/custom_table';

export class Custom_TableRepository extends RepositoryBase<Custom_Table> implements IRepository<Custom_Table>  {
	constructor() {
		super(Custom_TableSchema);
	}
};

Object.seal(Custom_TableRepository);
