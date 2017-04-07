import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Role_Wikidoc_Homepage_RelSchema} from './../Account/schema/role_wikidoc_homepage_rel-schema';
import {Role_Wikidoc_Homepage_Rel} from './../Account/role_wikidoc_homepage_rel';

export class Role_Wikidoc_Homepage_RelRepository extends RepositoryBase<Role_Wikidoc_Homepage_Rel> implements IRepository<Role_Wikidoc_Homepage_Rel>  {
	constructor() {
		super(Role_Wikidoc_Homepage_RelSchema);
	}
};

Object.seal(Role_Wikidoc_Homepage_RelRepository);
