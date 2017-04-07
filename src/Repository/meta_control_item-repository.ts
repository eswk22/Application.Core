import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_Control_ItemSchema} from './../Account/schema/meta_control_item-schema';
import {Meta_Control_Item} from './../Account/meta_control_item';

export class Meta_Control_ItemRepository extends RepositoryBase<Meta_Control_Item> implements IRepository<Meta_Control_Item>  {
	constructor() {
		super(Meta_Control_ItemSchema);
	}
};

Object.seal(Meta_Control_ItemRepository);
