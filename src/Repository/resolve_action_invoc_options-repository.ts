import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Action_Invoc_OptionsSchema} from './../Account/schema/resolve_action_invoc_options-schema';
import {Resolve_Action_Invoc_Options} from './../Account/resolve_action_invoc_options';

export class Resolve_Action_Invoc_OptionsRepository extends RepositoryBase<Resolve_Action_Invoc_Options> implements IRepository<Resolve_Action_Invoc_Options>  {
	constructor() {
		super(Resolve_Action_Invoc_OptionsSchema);
	}
};

Object.seal(Resolve_Action_Invoc_OptionsRepository);
