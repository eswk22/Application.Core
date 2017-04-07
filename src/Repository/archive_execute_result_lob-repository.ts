import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Archive_Execute_Result_LobSchema} from './../Account/schema/archive_execute_result_lob-schema';
import {Archive_Execute_Result_Lob} from './../Account/archive_execute_result_lob';

export class Archive_Execute_Result_LobRepository extends RepositoryBase<Archive_Execute_Result_Lob> implements IRepository<Archive_Execute_Result_Lob>  {
	constructor() {
		super(Archive_Execute_Result_LobSchema);
	}
};

Object.seal(Archive_Execute_Result_LobRepository);
