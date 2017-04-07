import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Wikidoc_Tag_RelSchema} from './../Account/schema/wikidoc_tag_rel-schema';
import {Wikidoc_Tag_Rel} from './../Account/wikidoc_tag_rel';

export class Wikidoc_Tag_RelRepository extends RepositoryBase<Wikidoc_Tag_Rel> implements IRepository<Wikidoc_Tag_Rel>  {
	constructor() {
		super(Wikidoc_Tag_RelSchema);
	}
};

Object.seal(Wikidoc_Tag_RelRepository);
