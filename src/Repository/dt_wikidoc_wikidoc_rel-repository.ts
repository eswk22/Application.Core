import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Dt_Wikidoc_Wikidoc_RelSchema} from './../Account/schema/dt_wikidoc_wikidoc_rel-schema';
import {Dt_Wikidoc_Wikidoc_Rel} from './../Account/dt_wikidoc_wikidoc_rel';

export class Dt_Wikidoc_Wikidoc_RelRepository extends RepositoryBase<Dt_Wikidoc_Wikidoc_Rel> implements IRepository<Dt_Wikidoc_Wikidoc_Rel>  {
	constructor() {
		super(Dt_Wikidoc_Wikidoc_RelSchema);
	}
};

Object.seal(Dt_Wikidoc_Wikidoc_RelRepository);
