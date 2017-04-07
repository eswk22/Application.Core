import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {WikidocSchema} from './../Account/schema/wikidoc-schema';
import {Wikidoc} from './../Account/wikidoc';

export class WikidocRepository extends RepositoryBase<Wikidoc> implements IRepository<Wikidoc>  {
	constructor() {
		super(WikidocSchema);
	}
};

Object.seal(WikidocRepository);
