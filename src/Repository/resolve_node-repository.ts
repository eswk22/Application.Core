import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_NodeSchema} from './../Account/schema/resolve_node-schema';
import {Resolve_Node} from './../Account/resolve_node';

export class Resolve_NodeRepository extends RepositoryBase<Resolve_Node> implements IRepository<Resolve_Node>  {
	constructor() {
		super(Resolve_NodeSchema);
	}
};

Object.seal(Resolve_NodeRepository);
