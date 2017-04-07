import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Tcp_FilterSchema} from './../Account/schema/tcp_filter-schema';
import {Tcp_Filter} from './../Account/tcp_filter';

export class Tcp_FilterRepository extends RepositoryBase<Tcp_Filter> implements IRepository<Tcp_Filter>  {
	constructor() {
		super(Tcp_FilterSchema);
	}
};

Object.seal(Tcp_FilterRepository);
