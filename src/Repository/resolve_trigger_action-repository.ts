import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Trigger_ActionSchema} from './../Account/schema/resolve_trigger_action-schema';
import {Resolve_Trigger_Action} from './../Account/resolve_trigger_action';

export class Resolve_Trigger_ActionRepository extends RepositoryBase<Resolve_Trigger_Action> implements IRepository<Resolve_Trigger_Action>  {
	constructor() {
		super(Resolve_Trigger_ActionSchema);
	}
};

Object.seal(Resolve_Trigger_ActionRepository);
