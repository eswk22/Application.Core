import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_Form_Tab_FieldSchema} from './../Account/schema/meta_form_tab_field-schema';
import {Meta_Form_Tab_Field} from './../Account/meta_form_tab_field';

export class Meta_Form_Tab_FieldRepository extends RepositoryBase<Meta_Form_Tab_Field> implements IRepository<Meta_Form_Tab_Field>  {
	constructor() {
		super(Meta_Form_Tab_FieldSchema);
	}
};

Object.seal(Meta_Form_Tab_FieldRepository);
