import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Rb_Task_ConditionSchema} from './../Account/schema/rb_task_condition-schema';
import {Rb_Task_Condition} from './../Account/rb_task_condition';

export class Rb_Task_ConditionRepository extends RepositoryBase<Rb_Task_Condition> implements IRepository<Rb_Task_Condition>  {
	constructor() {
		super(Rb_Task_ConditionSchema);
	}
};

Object.seal(Rb_Task_ConditionRepository);
