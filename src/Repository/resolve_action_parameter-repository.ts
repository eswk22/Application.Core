import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Action_ParameterSchema} from './../Account/schema/resolve_action_parameter-schema';
import {Resolve_Action_Parameter} from './../Account/resolve_action_parameter';

export class Resolve_Action_ParameterRepository extends RepositoryBase<Resolve_Action_Parameter> implements IRepository<Resolve_Action_Parameter>  {
	constructor() {
		super(Resolve_Action_ParameterSchema);
	}
};

Object.seal(Resolve_Action_ParameterRepository);
