import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {SBU_PHRASESSchema} from './../Account/schema/sbu_phrases-schema';
import {SBU_PHRASES} from './../Account/sbu_phrases';

export class SBU_PHRASESRepository extends RepositoryBase<SBU_PHRASES> implements IRepository<SBU_PHRASES>  {
	constructor() {
		super(SBU_PHRASESSchema);
	}
};

Object.seal(SBU_PHRASESRepository);
