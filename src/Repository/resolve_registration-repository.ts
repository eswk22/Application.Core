import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_RegistrationSchema} from './../Account/schema/resolve_registration-schema';
import {Resolve_Registration} from './../Account/resolve_registration';

export class Resolve_RegistrationRepository extends RepositoryBase<Resolve_Registration> implements IRepository<Resolve_Registration>  {
	constructor() {
		super(Resolve_RegistrationSchema);
	}
};

Object.seal(Resolve_RegistrationRepository);
