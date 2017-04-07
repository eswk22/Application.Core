import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Content_Request_FuSchema} from './../Account/schema/content_request_fu-schema';
import {Content_Request_Fu} from './../Account/content_request_fu';

export class Content_Request_FuRepository extends RepositoryBase<Content_Request_Fu> implements IRepository<Content_Request_Fu>  {
	constructor() {
		super(Content_Request_FuSchema);
	}
};

Object.seal(Content_Request_FuRepository);
