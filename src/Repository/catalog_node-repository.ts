import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Catalog_NodeSchema} from './../Account/schema/catalog_node-schema';
import {Catalog_Node} from './../Account/catalog_node';

export class Catalog_NodeRepository extends RepositoryBase<Catalog_Node> implements IRepository<Catalog_Node>  {
	constructor() {
		super(Catalog_NodeSchema);
	}
};

Object.seal(Catalog_NodeRepository);
