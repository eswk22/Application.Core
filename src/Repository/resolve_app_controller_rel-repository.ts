import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_App_Controller_RelSchema} from './../Account/schema/resolve_app_controller_rel-schema';
import {Resolve_App_Controller_Rel} from './../Account/resolve_app_controller_rel';

export class Resolve_App_Controller_RelRepository extends RepositoryBase<Resolve_App_Controller_Rel> implements IRepository<Resolve_App_Controller_Rel>  {
	constructor() {
		super(Resolve_App_Controller_RelSchema);
	}
};

Object.seal(Resolve_App_Controller_RelRepository);
