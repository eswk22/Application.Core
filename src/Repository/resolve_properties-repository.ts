import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_PropertiesSchema} from './../Account/schema/resolve_properties-schema';
import {Resolve_Properties} from './../Account/resolve_properties';

export class Resolve_PropertiesRepository extends RepositoryBase<Resolve_Properties> implements IRepository<Resolve_Properties>  {
	constructor() {
		super(Resolve_PropertiesSchema);
	}
};

Object.seal(Resolve_PropertiesRepository);
