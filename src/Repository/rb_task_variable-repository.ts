import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Rb_Task_VariableSchema} from './../Account/schema/rb_task_variable-schema';
import {Rb_Task_Variable} from './../Account/rb_task_variable';

export class Rb_Task_VariableRepository extends RepositoryBase<Rb_Task_Variable> implements IRepository<Rb_Task_Variable>  {
	constructor() {
		super(Rb_Task_VariableSchema);
	}
};

Object.seal(Rb_Task_VariableRepository);
