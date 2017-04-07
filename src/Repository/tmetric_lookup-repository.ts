import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Tmetric_LookupSchema} from './../Account/schema/tmetric_lookup-schema';
import {Tmetric_Lookup} from './../Account/tmetric_lookup';

export class Tmetric_LookupRepository extends RepositoryBase<Tmetric_Lookup> implements IRepository<Tmetric_Lookup>  {
	constructor() {
		super(Tmetric_LookupSchema);
	}
};

Object.seal(Tmetric_LookupRepository);
