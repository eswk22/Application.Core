import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Access_RightsSchema} from './../Account/schema/access_rights-schema';
import {Access_Rights} from './../Account/access_rights';

export class Access_RightsRepository extends RepositoryBase<Access_Rights> implements IRepository<Access_Rights>  {
	constructor() {
		super(Access_RightsSchema);
	}
};

Object.seal(Access_RightsRepository);
