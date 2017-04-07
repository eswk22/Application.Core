import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Social_TeamSchema} from './../Account/schema/social_team-schema';
import {Social_Team} from './../Account/social_team';

export class Social_TeamRepository extends RepositoryBase<Social_Team> implements IRepository<Social_Team>  {
	constructor() {
		super(Social_TeamSchema);
	}
};

Object.seal(Social_TeamRepository);
