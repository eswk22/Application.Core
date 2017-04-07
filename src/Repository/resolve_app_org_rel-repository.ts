import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_App_Org_RelSchema} from './../Account/schema/resolve_app_org_rel-schema';
import {Resolve_App_Org_Rel} from './../Account/resolve_app_org_rel';

export class Resolve_App_Org_RelRepository extends RepositoryBase<Resolve_App_Org_Rel> implements IRepository<Resolve_App_Org_Rel>  {
	constructor() {
		super(Resolve_App_Org_RelSchema);
	}
};

Object.seal(Resolve_App_Org_RelRepository);
