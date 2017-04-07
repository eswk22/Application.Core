import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_ControllerSchema} from './../Account/schema/resolve_controller-schema';
import {Resolve_Controller} from './../Account/resolve_controller';

export class Resolve_ControllerRepository extends RepositoryBase<Resolve_Controller> implements IRepository<Resolve_Controller>  {
	constructor() {
		super(Resolve_ControllerSchema);
	}
};

Object.seal(Resolve_ControllerRepository);
