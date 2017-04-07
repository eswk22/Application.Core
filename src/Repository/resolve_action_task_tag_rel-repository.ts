import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Action_Task_Tag_RelSchema} from './../Account/schema/resolve_action_task_tag_rel-schema';
import {Resolve_Action_Task_Tag_Rel} from './../Account/resolve_action_task_tag_rel';

export class Resolve_Action_Task_Tag_RelRepository extends RepositoryBase<Resolve_Action_Task_Tag_Rel> implements IRepository<Resolve_Action_Task_Tag_Rel>  {
	constructor() {
		super(Resolve_Action_Task_Tag_RelSchema);
	}
};

Object.seal(Resolve_Action_Task_Tag_RelRepository);
