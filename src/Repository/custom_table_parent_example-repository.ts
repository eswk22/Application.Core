import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Custom_Table_Parent_ExampleSchema} from './../Account/schema/custom_table_parent_example-schema';
import {Custom_Table_Parent_Example} from './../Account/custom_table_parent_example';

export class Custom_Table_Parent_ExampleRepository extends RepositoryBase<Custom_Table_Parent_Example> implements IRepository<Custom_Table_Parent_Example>  {
	constructor() {
		super(Custom_Table_Parent_ExampleSchema);
	}
};

Object.seal(Custom_Table_Parent_ExampleRepository);
