import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_Form_View_PropertiesSchema} from './../Account/schema/meta_form_view_properties-schema';
import {Meta_Form_View_Properties} from './../Account/meta_form_view_properties';

export class Meta_Form_View_PropertiesRepository extends RepositoryBase<Meta_Form_View_Properties> implements IRepository<Meta_Form_View_Properties>  {
	constructor() {
		super(Meta_Form_View_PropertiesSchema);
	}
};

Object.seal(Meta_Form_View_PropertiesRepository);
