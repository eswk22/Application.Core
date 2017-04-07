import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Social_ForumSchema} from './../Account/schema/social_forum-schema';
import {Social_Forum} from './../Account/social_forum';

export class Social_ForumRepository extends RepositoryBase<Social_Forum> implements IRepository<Social_Forum>  {
	constructor() {
		super(Social_ForumSchema);
	}
};

Object.seal(Social_ForumRepository);
