import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Catalog_EdgeSchema} from './../Account/schema/catalog_edge-schema';
import {Catalog_Edge} from './../Account/catalog_edge';

export class Catalog_EdgeRepository extends RepositoryBase<Catalog_Edge> implements IRepository<Catalog_Edge>  {
	constructor() {
		super(Catalog_EdgeSchema);
	}
};

Object.seal(Catalog_EdgeRepository);
