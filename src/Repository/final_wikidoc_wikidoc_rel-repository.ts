import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Final_Wikidoc_Wikidoc_RelSchema} from './../Account/schema/final_wikidoc_wikidoc_rel-schema';
import {Final_Wikidoc_Wikidoc_Rel} from './../Account/final_wikidoc_wikidoc_rel';

export class Final_Wikidoc_Wikidoc_RelRepository extends RepositoryBase<Final_Wikidoc_Wikidoc_Rel> implements IRepository<Final_Wikidoc_Wikidoc_Rel>  {
	constructor() {
		super(Final_Wikidoc_Wikidoc_RelSchema);
	}
};

Object.seal(Final_Wikidoc_Wikidoc_RelRepository);
