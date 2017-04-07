import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Dash_Timer_PropertiesSchema} from './../Account/schema/dash_timer_properties-schema';
import {Dash_Timer_Properties} from './../Account/dash_timer_properties';

export class Dash_Timer_PropertiesRepository extends RepositoryBase<Dash_Timer_Properties> implements IRepository<Dash_Timer_Properties>  {
	constructor() {
		super(Dash_Timer_PropertiesSchema);
	}
};

Object.seal(Dash_Timer_PropertiesRepository);
