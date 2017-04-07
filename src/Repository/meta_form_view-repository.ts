import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_Form_ViewSchema} from './../Account/schema/meta_form_view-schema';
import {Meta_Form_View} from './../Account/meta_form_view';

export class Meta_Form_ViewRepository extends RepositoryBase<Meta_Form_View> implements IRepository<Meta_Form_View>  {
	constructor() {
		super(Meta_Form_ViewSchema);
	}
};

Object.seal(Meta_Form_ViewRepository);
