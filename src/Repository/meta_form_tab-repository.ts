import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_Form_TabSchema} from './../Account/schema/meta_form_tab-schema';
import {Meta_Form_Tab} from './../Account/meta_form_tab';

export class Meta_Form_TabRepository extends RepositoryBase<Meta_Form_Tab> implements IRepository<Meta_Form_Tab>  {
	constructor() {
		super(Meta_Form_TabSchema);
	}
};

Object.seal(Meta_Form_TabRepository);
