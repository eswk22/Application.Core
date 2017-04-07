import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {SBU_UsersSchema} from './../Account/schema/sbu_users-schema';
import {SBU_Users} from './../Account/sbu_users';

export class SBU_UsersRepository extends RepositoryBase<SBU_Users> implements IRepository<SBU_Users>  {
	constructor() {
		super(SBU_UsersSchema);
	}
};

Object.seal(SBU_UsersRepository);
