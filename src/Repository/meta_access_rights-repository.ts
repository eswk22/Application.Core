import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Meta_Access_RightsSchema} from './../Account/schema/meta_access_rights-schema';
import {Meta_Access_Rights} from './../Account/meta_access_rights';

export class Meta_Access_RightsRepository extends RepositoryBase<Meta_Access_Rights> implements IRepository<Meta_Access_Rights>  {
	constructor() {
		super(Meta_Access_RightsSchema);
	}
};

Object.seal(Meta_Access_RightsRepository);
