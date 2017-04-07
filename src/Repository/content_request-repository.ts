import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Content_RequestSchema} from './../Account/schema/content_request-schema';
import {Content_Request} from './../Account/content_request';

export class Content_RequestRepository extends RepositoryBase<Content_Request> implements IRepository<Content_Request>  {
	constructor() {
		super(Content_RequestSchema);
	}
};

Object.seal(Content_RequestRepository);
