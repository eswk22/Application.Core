import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Wiki_LookupSchema} from './../Account/schema/resolve_wiki_lookup-schema';
import {Resolve_Wiki_Lookup} from './../Account/resolve_wiki_lookup';

export class Resolve_Wiki_LookupRepository extends RepositoryBase<Resolve_Wiki_Lookup> implements IRepository<Resolve_Wiki_Lookup>  {
	constructor() {
		super(Resolve_Wiki_LookupSchema);
	}
};

Object.seal(Resolve_Wiki_LookupRepository);
