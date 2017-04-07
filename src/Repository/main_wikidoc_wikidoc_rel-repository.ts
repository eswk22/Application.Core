import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Main_Wikidoc_Wikidoc_RelSchema} from './../Account/schema/main_wikidoc_wikidoc_rel-schema';
import {Main_Wikidoc_Wikidoc_Rel} from './../Account/main_wikidoc_wikidoc_rel';

export class Main_Wikidoc_Wikidoc_RelRepository extends RepositoryBase<Main_Wikidoc_Wikidoc_Rel> implements IRepository<Main_Wikidoc_Wikidoc_Rel>  {
	constructor() {
		super(Main_Wikidoc_Wikidoc_RelSchema);
	}
};

Object.seal(Main_Wikidoc_Wikidoc_RelRepository);
