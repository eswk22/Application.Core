import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Exception_Wikidoc_Wikidoc_RelSchema} from './../Account/schema/exception_wikidoc_wikidoc_rel-schema';
import {Exception_Wikidoc_Wikidoc_Rel} from './../Account/exception_wikidoc_wikidoc_rel';

export class Exception_Wikidoc_Wikidoc_RelRepository extends RepositoryBase<Exception_Wikidoc_Wikidoc_Rel> implements IRepository<Exception_Wikidoc_Wikidoc_Rel>  {
	constructor() {
		super(Exception_Wikidoc_Wikidoc_RelSchema);
	}
};

Object.seal(Exception_Wikidoc_Wikidoc_RelRepository);
