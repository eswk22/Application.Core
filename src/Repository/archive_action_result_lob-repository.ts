import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Archive_Action_Result_LobSchema} from './../Account/schema/archive_action_result_lob-schema';
import {Archive_Action_Result_Lob} from './../Account/archive_action_result_lob';

export class Archive_Action_Result_LobRepository extends RepositoryBase<Archive_Action_Result_Lob> implements IRepository<Archive_Action_Result_Lob>  {
	constructor() {
		super(Archive_Action_Result_LobSchema);
	}
};

Object.seal(Archive_Action_Result_LobRepository);
