import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Wikidoc_Metaform_RelSchema} from './../Account/schema/wikidoc_metaform_rel-schema';
import {Wikidoc_Metaform_Rel} from './../Account/wikidoc_metaform_rel';

export class Wikidoc_Metaform_RelRepository extends RepositoryBase<Wikidoc_Metaform_Rel> implements IRepository<Wikidoc_Metaform_Rel>  {
	constructor() {
		super(Wikidoc_Metaform_RelSchema);
	}
};

Object.seal(Wikidoc_Metaform_RelRepository);
