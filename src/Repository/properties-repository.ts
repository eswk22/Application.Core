import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {PropertiesSchema} from './../Account/schema/properties-schema';
import {Properties} from './../Account/properties';

export class PropertiesRepository extends RepositoryBase<Properties> implements IRepository<Properties>  {
	constructor() {
		super(PropertiesSchema);
	}
};

Object.seal(PropertiesRepository);
