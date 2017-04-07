import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Cns_NameSchema} from './../Account/schema/resolve_cns_name-schema';
import {Resolve_Cns_Name} from './../Account/resolve_cns_name';

export class Resolve_Cns_NameRepository extends RepositoryBase<Resolve_Cns_Name> implements IRepository<Resolve_Cns_Name>  {
	constructor() {
		super(Resolve_Cns_NameSchema);
	}
};

Object.seal(Resolve_Cns_NameRepository);
