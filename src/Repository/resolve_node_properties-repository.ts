import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Node_PropertiesSchema} from './../Account/schema/resolve_node_properties-schema';
import {Resolve_Node_Properties} from './../Account/resolve_node_properties';

export class Resolve_Node_PropertiesRepository extends RepositoryBase<Resolve_Node_Properties> implements IRepository<Resolve_Node_Properties>  {
	constructor() {
		super(Resolve_Node_PropertiesSchema);
	}
};

Object.seal(Resolve_Node_PropertiesRepository);
