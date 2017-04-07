import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {WikiattachmentcontentSchema} from './../Account/schema/wikiattachmentcontent-schema';
import {Wikiattachmentcontent} from './../Account/wikiattachmentcontent';

export class WikiattachmentcontentRepository extends RepositoryBase<Wikiattachmentcontent> implements IRepository<Wikiattachmentcontent>  {
	constructor() {
		super(WikiattachmentcontentSchema);
	}
};

Object.seal(WikiattachmentcontentRepository);
