import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Name_PropertySchema} from './../Account/schema/name_property-schema';
import {Name_Property} from './../Account/name_property';

export class Name_PropertyRepository extends RepositoryBase<Name_Property> implements IRepository<Name_Property>  {
	constructor() {
		super(Name_PropertySchema);
	}
};

Object.seal(Name_PropertyRepository);
