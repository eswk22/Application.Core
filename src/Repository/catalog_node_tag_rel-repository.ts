import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Catalog_Node_Tag_RelSchema} from './../Account/schema/catalog_node_tag_rel-schema';
import {Catalog_Node_Tag_Rel} from './../Account/catalog_node_tag_rel';

export class Catalog_Node_Tag_RelRepository extends RepositoryBase<Catalog_Node_Tag_Rel> implements IRepository<Catalog_Node_Tag_Rel>  {
	constructor() {
		super(Catalog_Node_Tag_RelSchema);
	}
};

Object.seal(Catalog_Node_Tag_RelRepository);
