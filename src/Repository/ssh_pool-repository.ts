import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Ssh_PoolSchema} from './../Account/schema/ssh_pool-schema';
import {Ssh_Pool} from './../Account/ssh_pool';

export class Ssh_PoolRepository extends RepositoryBase<Ssh_Pool> implements IRepository<Ssh_Pool>  {
	constructor() {
		super(Ssh_PoolSchema);
	}
};

Object.seal(Ssh_PoolRepository);
