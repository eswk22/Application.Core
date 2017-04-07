import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Registration_PropertySchema} from './../Account/schema/resolve_registration_property-schema';
import {Resolve_Registration_Property} from './../Account/resolve_registration_property';

export class Resolve_Registration_PropertyRepository extends RepositoryBase<Resolve_Registration_Property> implements IRepository<Resolve_Registration_Property>  {
	constructor() {
		super(Resolve_Registration_PropertySchema);
	}
};

Object.seal(Resolve_Registration_PropertyRepository);
