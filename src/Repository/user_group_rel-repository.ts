import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {User_Group_RelSchema} from './../Account/schema/user_group_rel-schema';
import {User_Group_Rel} from './../Account/user_group_rel';

export class User_Group_RelRepository extends RepositoryBase<User_Group_Rel> implements IRepository<User_Group_Rel>  {
	constructor() {
		super(User_Group_RelSchema);
	}
};

Object.seal(User_Group_RelRepository);
