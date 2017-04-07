import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_Field_PropertiesSchema} from './../Account/schema/meta_field_properties-schema';
import {Meta_Field_Properties} from './../Account/meta_field_properties';

export class Meta_Field_PropertiesRepository extends RepositoryBase<Meta_Field_Properties> implements IRepository<Meta_Field_Properties>  {
	constructor() {
		super(Meta_Field_PropertiesSchema);
	}
};

Object.seal(Meta_Field_PropertiesRepository);
