import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_Form_ActionSchema} from './../Account/schema/meta_form_action-schema';
import {Meta_Form_Action} from './../Account/meta_form_action';

export class Meta_Form_ActionRepository extends RepositoryBase<Meta_Form_Action> implements IRepository<Meta_Form_Action>  {
	constructor() {
		super(Meta_Form_ActionSchema);
	}
};

Object.seal(Meta_Form_ActionRepository);
