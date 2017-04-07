import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_Table_View_FieldSchema} from './../Account/schema/meta_table_view_field-schema';
import {Meta_Table_View_Field} from './../Account/meta_table_view_field';

export class Meta_Table_View_FieldRepository extends RepositoryBase<Meta_Table_View_Field> implements IRepository<Meta_Table_View_Field>  {
	constructor() {
		super(Meta_Table_View_FieldSchema);
	}
};

Object.seal(Meta_Table_View_FieldRepository);
