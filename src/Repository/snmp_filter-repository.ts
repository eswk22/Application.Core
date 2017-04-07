import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Snmp_FilterSchema} from './../Account/schema/snmp_filter-schema';
import {Snmp_Filter} from './../Account/snmp_filter';

export class Snmp_FilterRepository extends RepositoryBase<Snmp_Filter> implements IRepository<Snmp_Filter>  {
	constructor() {
		super(Snmp_FilterSchema);
	}
};

Object.seal(Snmp_FilterRepository);
