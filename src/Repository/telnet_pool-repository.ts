import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Telnet_PoolSchema} from './../Account/schema/telnet_pool-schema';
import {Telnet_Pool} from './../Account/telnet_pool';

export class Telnet_PoolRepository extends RepositoryBase<Telnet_Pool> implements IRepository<Telnet_Pool>  {
	constructor() {
		super(Telnet_PoolSchema);
	}
};

Object.seal(Telnet_PoolRepository);
