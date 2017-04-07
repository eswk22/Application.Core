import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Exception_Wikidoc_Task_RelSchema} from './../Account/schema/exception_wikidoc_task_rel-schema';
import {Exception_Wikidoc_Task_Rel} from './../Account/exception_wikidoc_task_rel';

export class Exception_Wikidoc_Task_RelRepository extends RepositoryBase<Exception_Wikidoc_Task_Rel> implements IRepository<Exception_Wikidoc_Task_Rel>  {
	constructor() {
		super(Exception_Wikidoc_Task_RelSchema);
	}
};

Object.seal(Exception_Wikidoc_Task_RelRepository);
