import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Main_Wikidoc_Task_RelSchema} from './../Account/schema/main_wikidoc_task_rel-schema';
import {Main_Wikidoc_Task_Rel} from './../Account/main_wikidoc_task_rel';

export class Main_Wikidoc_Task_RelRepository extends RepositoryBase<Main_Wikidoc_Task_Rel> implements IRepository<Main_Wikidoc_Task_Rel>  {
	constructor() {
		super(Main_Wikidoc_Task_RelSchema);
	}
};

Object.seal(Main_Wikidoc_Task_RelRepository);
