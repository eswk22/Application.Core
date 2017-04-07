import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Config_ActivedirectorySchema} from './../Account/schema/config_activedirectory-schema';
import {Config_Activedirectory} from './../Account/config_activedirectory';

export class Config_ActivedirectoryRepository extends RepositoryBase<Config_Activedirectory> implements IRepository<Config_Activedirectory>  {
	constructor() {
		super(Config_ActivedirectorySchema);
	}
};

Object.seal(Config_ActivedirectoryRepository);
