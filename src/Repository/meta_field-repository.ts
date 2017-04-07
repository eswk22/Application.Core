import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_FieldSchema} from './../Account/schema/meta_field-schema';
import {Meta_Field} from './../Account/meta_field';

export class Meta_FieldRepository extends RepositoryBase<Meta_Field> implements IRepository<Meta_Field>  {
	constructor() {
		super(Meta_FieldSchema);
	}
};

Object.seal(Meta_FieldRepository);
