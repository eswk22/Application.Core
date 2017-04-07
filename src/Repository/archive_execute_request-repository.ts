import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Archive_Execute_RequestSchema} from './../Account/schema/archive_execute_request-schema';
import {Archive_Execute_Request} from './../Account/archive_execute_request';

export class Archive_Execute_RequestRepository extends RepositoryBase<Archive_Execute_Request> implements IRepository<Archive_Execute_Request>  {
	constructor() {
		super(Archive_Execute_RequestSchema);
	}
};

Object.seal(Archive_Execute_RequestRepository);
