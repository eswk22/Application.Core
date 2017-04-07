import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_View_FieldSchema} from './../Account/schema/meta_view_field-schema';
import {Meta_View_Field} from './../Account/meta_view_field';

export class Meta_View_FieldRepository extends RepositoryBase<Meta_View_Field> implements IRepository<Meta_View_Field>  {
	constructor() {
		super(Meta_View_FieldSchema);
	}
};

Object.seal(Meta_View_FieldRepository);
