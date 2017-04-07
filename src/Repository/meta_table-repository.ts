import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_TableSchema} from './../Account/schema/meta_table-schema';
import {Meta_Table} from './../Account/meta_table';

export class Meta_TableRepository extends RepositoryBase<Meta_Table> implements IRepository<Meta_Table>  {
	constructor() {
		super(Meta_TableSchema);
	}
};

Object.seal(Meta_TableRepository);
