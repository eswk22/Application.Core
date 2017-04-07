import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Content_Wikidoc_Task_RelSchema} from './../Account/schema/content_wikidoc_task_rel-schema';
import {Content_Wikidoc_Task_Rel} from './../Account/content_wikidoc_task_rel';

export class Content_Wikidoc_Task_RelRepository extends RepositoryBase<Content_Wikidoc_Task_Rel> implements IRepository<Content_Wikidoc_Task_Rel>  {
	constructor() {
		super(Content_Wikidoc_Task_RelSchema);
	}
};

Object.seal(Content_Wikidoc_Task_RelRepository);
