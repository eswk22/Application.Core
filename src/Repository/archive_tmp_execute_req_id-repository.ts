import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Archive_Tmp_Execute_Req_IdSchema} from './../Account/schema/archive_tmp_execute_req_id-schema';
import {Archive_Tmp_Execute_Req_Id} from './../Account/archive_tmp_execute_req_id';

export class Archive_Tmp_Execute_Req_IdRepository extends RepositoryBase<Archive_Tmp_Execute_Req_Id> implements IRepository<Archive_Tmp_Execute_Req_Id>  {
	constructor() {
		super(Archive_Tmp_Execute_Req_IdSchema);
	}
};

Object.seal(Archive_Tmp_Execute_Req_IdRepository);
