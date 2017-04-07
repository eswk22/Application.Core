import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Rb_TaskSchema} from './../Account/schema/rb_task-schema';
import {Rb_Task} from './../Account/rb_task';

export class Rb_TaskRepository extends RepositoryBase<Rb_Task> implements IRepository<Rb_Task>  {
	constructor() {
		super(Rb_TaskSchema);
	}
};

Object.seal(Rb_TaskRepository);
