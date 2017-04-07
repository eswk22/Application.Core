import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Impex_WikiSchema} from './../Account/schema/resolve_impex_wiki-schema';
import {Resolve_Impex_Wiki} from './../Account/resolve_impex_wiki';

export class Resolve_Impex_WikiRepository extends RepositoryBase<Resolve_Impex_Wiki> implements IRepository<Resolve_Impex_Wiki>  {
	constructor() {
		super(Resolve_Impex_WikiSchema);
	}
};

Object.seal(Resolve_Impex_WikiRepository);
