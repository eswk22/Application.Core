import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Dash_Task_PropertiesSchema} from './../Account/schema/dash_task_properties-schema';
import {Dash_Task_Properties} from './../Account/dash_task_properties';

export class Dash_Task_PropertiesRepository extends RepositoryBase<Dash_Task_Properties> implements IRepository<Dash_Task_Properties>  {
	constructor() {
		super(Dash_Task_PropertiesSchema);
	}
};

Object.seal(Dash_Task_PropertiesRepository);
