import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {User_Role_RelSchema} from './../Account/schema/user_role_rel-schema';
import {User_Role_Rel} from './../Account/user_role_rel';

export class User_Role_RelRepository extends RepositoryBase<User_Role_Rel> implements IRepository<User_Role_Rel>  {
	constructor() {
		super(User_Role_RelSchema);
	}
};

Object.seal(User_Role_RelRepository);
