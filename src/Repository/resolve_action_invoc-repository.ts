import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Action_InvocSchema} from './../Account/schema/resolve_action_invoc-schema';
import {Resolve_Action_Invoc} from './../Account/resolve_action_invoc';

export class Resolve_Action_InvocRepository extends RepositoryBase<Resolve_Action_Invoc> implements IRepository<Resolve_Action_Invoc>  {
	constructor() {
		super(Resolve_Action_InvocSchema);
	}
};

Object.seal(Resolve_Action_InvocRepository);
