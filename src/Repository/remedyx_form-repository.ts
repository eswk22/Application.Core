import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Remedyx_FormSchema} from './../Account/schema/remedyx_form-schema';
import {Remedyx_Form} from './../Account/remedyx_form';

export class Remedyx_FormRepository extends RepositoryBase<Remedyx_Form> implements IRepository<Remedyx_Form>  {
	constructor() {
		super(Remedyx_FormSchema);
	}
};

Object.seal(Remedyx_FormRepository);
