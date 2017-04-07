import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {SBU_LISTSchema} from './../Account/schema/sbu_list-schema';
import {SBU_LIST} from './../Account/sbu_list';

export class SBU_LISTRepository extends RepositoryBase<SBU_LIST> implements IRepository<SBU_LIST>  {
	constructor() {
		super(SBU_LISTSchema);
	}
};

Object.seal(SBU_LISTRepository);
