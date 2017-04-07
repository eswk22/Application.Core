import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Final_Wikidoc_Task_RelSchema} from './../Account/schema/final_wikidoc_task_rel-schema';
import {Final_Wikidoc_Task_Rel} from './../Account/final_wikidoc_task_rel';

export class Final_Wikidoc_Task_RelRepository extends RepositoryBase<Final_Wikidoc_Task_Rel> implements IRepository<Final_Wikidoc_Task_Rel>  {
	constructor() {
		super(Final_Wikidoc_Task_RelSchema);
	}
};

Object.seal(Final_Wikidoc_Task_RelRepository);
