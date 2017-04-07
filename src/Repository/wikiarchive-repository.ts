import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {WikiarchiveSchema} from './../Account/schema/wikiarchive-schema';
import {Wikiarchive} from './../Account/wikiarchive';

export class WikiarchiveRepository extends RepositoryBase<Wikiarchive> implements IRepository<Wikiarchive>  {
	constructor() {
		super(WikiarchiveSchema);
	}
};

Object.seal(WikiarchiveRepository);
