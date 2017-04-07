import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Action_TaskSchema} from './../Account/schema/resolve_action_task-schema';
import {Resolve_Action_Task} from './../Account/resolve_action_task';

export class Resolve_Action_TaskRepository extends RepositoryBase<Resolve_Action_Task> implements IRepository<Resolve_Action_Task>  {
	constructor() {
		super(Resolve_Action_TaskSchema);
	}
};

Object.seal(Resolve_Action_TaskRepository);
