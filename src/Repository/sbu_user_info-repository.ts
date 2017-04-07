import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {SBU_USER_INFOSchema} from './../Account/schema/sbu_user_info-schema';
import {SBU_USER_INFO} from './../Account/sbu_user_info';

export class SBU_USER_INFORepository extends RepositoryBase<SBU_USER_INFO> implements IRepository<SBU_USER_INFO>  {
	constructor() {
		super(SBU_USER_INFOSchema);
	}
};

Object.seal(SBU_USER_INFORepository);
