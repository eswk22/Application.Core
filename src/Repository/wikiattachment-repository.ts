import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {WikiattachmentSchema} from './../Account/schema/wikiattachment-schema';
import {Wikiattachment} from './../Account/wikiattachment';

export class WikiattachmentRepository extends RepositoryBase<Wikiattachment> implements IRepository<Wikiattachment>  {
	constructor() {
		super(WikiattachmentSchema);
	}
};

Object.seal(WikiattachmentRepository);
