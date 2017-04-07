import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {GroupsSchema} from './../Account/schema/groups-schema';
import {Groups} from './../Account/groups';

export class GroupsRepository extends RepositoryBase<Groups> implements IRepository<Groups>  {
	constructor() {
		super(GroupsSchema);
	}
};

Object.seal(GroupsRepository);
