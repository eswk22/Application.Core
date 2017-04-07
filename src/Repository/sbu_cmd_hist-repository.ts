import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {SBU_CMD_HISTSchema} from './../Account/schema/sbu_cmd_hist-schema';
import {SBU_CMD_HIST} from './../Account/sbu_cmd_hist';

export class SBU_CMD_HISTRepository extends RepositoryBase<SBU_CMD_HIST> implements IRepository<SBU_CMD_HIST>  {
	constructor() {
		super(SBU_CMD_HISTSchema);
	}
};

Object.seal(SBU_CMD_HISTRepository);
