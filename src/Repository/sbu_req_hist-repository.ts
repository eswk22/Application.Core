import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {SBU_Req_HistSchema} from './../Account/schema/sbu_req_hist-schema';
import {SBU_Req_Hist} from './../Account/sbu_req_hist';

export class SBU_Req_HistRepository extends RepositoryBase<SBU_Req_Hist> implements IRepository<SBU_Req_Hist>  {
	constructor() {
		super(SBU_Req_HistSchema);
	}
};

Object.seal(SBU_Req_HistRepository);
