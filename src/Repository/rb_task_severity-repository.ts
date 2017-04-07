import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Rb_Task_SeveritySchema} from './../Account/schema/rb_task_severity-schema';
import {Rb_Task_Severity} from './../Account/rb_task_severity';

export class Rb_Task_SeverityRepository extends RepositoryBase<Rb_Task_Severity> implements IRepository<Rb_Task_Severity>  {
	constructor() {
		super(Rb_Task_SeveritySchema);
	}
};

Object.seal(Rb_Task_SeverityRepository);
