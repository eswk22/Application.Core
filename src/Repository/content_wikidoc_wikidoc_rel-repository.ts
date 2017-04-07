import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Content_Wikidoc_Wikidoc_RelSchema} from './../Account/schema/content_wikidoc_wikidoc_rel-schema';
import {Content_Wikidoc_Wikidoc_Rel} from './../Account/content_wikidoc_wikidoc_rel';

export class Content_Wikidoc_Wikidoc_RelRepository extends RepositoryBase<Content_Wikidoc_Wikidoc_Rel> implements IRepository<Content_Wikidoc_Wikidoc_Rel>  {
	constructor() {
		super(Content_Wikidoc_Wikidoc_RelSchema);
	}
};

Object.seal(Content_Wikidoc_Wikidoc_RelRepository);
