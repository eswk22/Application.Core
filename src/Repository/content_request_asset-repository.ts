import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Content_Request_AssetSchema} from './../Account/schema/content_request_asset-schema';
import {Content_Request_Asset} from './../Account/content_request_asset';

export class Content_Request_AssetRepository extends RepositoryBase<Content_Request_Asset> implements IRepository<Content_Request_Asset>  {
	constructor() {
		super(Content_Request_AssetSchema);
	}
};

Object.seal(Content_Request_AssetRepository);
