import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Action_Task_Mock_DataSchema} from './../Account/schema/resolve_action_task_mock_data-schema';
import {Resolve_Action_Task_Mock_Data} from './../Account/resolve_action_task_mock_data';

export class Resolve_Action_Task_Mock_DataRepository extends RepositoryBase<Resolve_Action_Task_Mock_Data> implements IRepository<Resolve_Action_Task_Mock_Data>  {
	constructor() {
		super(Resolve_Action_Task_Mock_DataSchema);
	}
};

Object.seal(Resolve_Action_Task_Mock_DataRepository);
