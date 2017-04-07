import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Post_SyncSchema} from './../Account/schema/post_sync-schema';
import {Post_Sync} from './../Account/post_sync';

export class Post_SyncRepository extends RepositoryBase<Post_Sync> implements IRepository<Post_Sync>  {
	constructor() {
		super(Post_SyncSchema);
	}
};

Object.seal(Post_SyncRepository);
