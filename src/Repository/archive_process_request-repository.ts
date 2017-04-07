import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Archive_Process_RequestSchema} from './../Account/schema/archive_process_request-schema';
import {Archive_Process_Request} from './../Account/archive_process_request';

export class Archive_Process_RequestRepository extends RepositoryBase<Archive_Process_Request> implements IRepository<Archive_Process_Request>  {
	constructor() {
		super(Archive_Process_RequestSchema);
	}
};

Object.seal(Archive_Process_RequestRepository);
