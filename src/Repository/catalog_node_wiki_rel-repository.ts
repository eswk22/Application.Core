import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Catalog_Node_Wiki_RelSchema} from './../Account/schema/catalog_node_wiki_rel-schema';
import {Catalog_Node_Wiki_Rel} from './../Account/catalog_node_wiki_rel';

export class Catalog_Node_Wiki_RelRepository extends RepositoryBase<Catalog_Node_Wiki_Rel> implements IRepository<Catalog_Node_Wiki_Rel>  {
	constructor() {
		super(Catalog_Node_Wiki_RelSchema);
	}
};

Object.seal(Catalog_Node_Wiki_RelRepository);
