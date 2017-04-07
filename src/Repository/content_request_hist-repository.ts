import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Content_Request_HistSchema} from './../Account/schema/content_request_hist-schema';
import {Content_Request_Hist} from './../Account/content_request_hist';

export class Content_Request_HistRepository extends RepositoryBase<Content_Request_Hist> implements IRepository<Content_Request_Hist>  {
	constructor() {
		super(Content_Request_HistSchema);
	}
};

Object.seal(Content_Request_HistRepository);
