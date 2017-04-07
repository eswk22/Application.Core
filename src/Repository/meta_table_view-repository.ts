import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_Table_ViewSchema} from './../Account/schema/meta_table_view-schema';
import {Meta_Table_View} from './../Account/meta_table_view';

export class Meta_Table_ViewRepository extends RepositoryBase<Meta_Table_View> implements IRepository<Meta_Table_View>  {
	constructor() {
		super(Meta_Table_ViewSchema);
	}
};

Object.seal(Meta_Table_ViewRepository);
