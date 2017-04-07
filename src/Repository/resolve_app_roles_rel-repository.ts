import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_App_Roles_RelSchema} from './../Account/schema/resolve_app_roles_rel-schema';
import {Resolve_App_Roles_Rel} from './../Account/resolve_app_roles_rel';

export class Resolve_App_Roles_RelRepository extends RepositoryBase<Resolve_App_Roles_Rel> implements IRepository<Resolve_App_Roles_Rel>  {
	constructor() {
		super(Resolve_App_Roles_RelSchema);
	}
};

Object.seal(Resolve_App_Roles_RelRepository);
