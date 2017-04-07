import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Group_Role_RelSchema} from './../Account/schema/group_role_rel-schema';
import {Group_Role_Rel} from './../Account/group_role_rel';

export class Group_Role_RelRepository extends RepositoryBase<Group_Role_Rel> implements IRepository<Group_Role_Rel>  {
	constructor() {
		super(Group_Role_RelSchema);
	}
};

Object.seal(Group_Role_RelRepository);
