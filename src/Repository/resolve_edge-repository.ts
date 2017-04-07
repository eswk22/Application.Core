import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_EdgeSchema} from './../Account/schema/resolve_edge-schema';
import {Resolve_Edge} from './../Account/resolve_edge';

export class Resolve_EdgeRepository extends RepositoryBase<Resolve_Edge> implements IRepository<Resolve_Edge>  {
	constructor() {
		super(Resolve_EdgeSchema);
	}
};

Object.seal(Resolve_EdgeRepository);
