import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Edge_PropertiesSchema} from './../Account/schema/resolve_edge_properties-schema';
import {Resolve_Edge_Properties} from './../Account/resolve_edge_properties';

export class Resolve_Edge_PropertiesRepository extends RepositoryBase<Resolve_Edge_Properties> implements IRepository<Resolve_Edge_Properties>  {
	constructor() {
		super(Resolve_Edge_PropertiesSchema);
	}
};

Object.seal(Resolve_Edge_PropertiesRepository);
