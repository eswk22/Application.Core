import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_View_LookupSchema} from './../Account/schema/meta_view_lookup-schema';
import {Meta_View_Lookup} from './../Account/meta_view_lookup';

export class Meta_View_LookupRepository extends RepositoryBase<Meta_View_Lookup> implements IRepository<Meta_View_Lookup>  {
	constructor() {
		super(Meta_View_LookupSchema);
	}
};

Object.seal(Meta_View_LookupRepository);
