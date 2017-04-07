import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Netcool_FilterSchema} from './../Account/schema/netcool_filter-schema';
import {Netcool_Filter} from './../Account/netcool_filter';

export class Netcool_FilterRepository extends RepositoryBase<Netcool_Filter> implements IRepository<Netcool_Filter>  {
	constructor() {
		super(Netcool_FilterSchema);
	}
};

Object.seal(Netcool_FilterRepository);
