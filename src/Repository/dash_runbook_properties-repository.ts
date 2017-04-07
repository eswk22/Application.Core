import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Dash_Runbook_PropertiesSchema} from './../Account/schema/dash_runbook_properties-schema';
import {Dash_Runbook_Properties} from './../Account/dash_runbook_properties';

export class Dash_Runbook_PropertiesRepository extends RepositoryBase<Dash_Runbook_Properties> implements IRepository<Dash_Runbook_Properties>  {
	constructor() {
		super(Dash_Runbook_PropertiesSchema);
	}
};

Object.seal(Dash_Runbook_PropertiesRepository);
