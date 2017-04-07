import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Wikidoc_Attachment_RelSchema} from './../Account/schema/wikidoc_attachment_rel-schema';
import {Wikidoc_Attachment_Rel} from './../Account/wikidoc_attachment_rel';

export class Wikidoc_Attachment_RelRepository extends RepositoryBase<Wikidoc_Attachment_Rel> implements IRepository<Wikidoc_Attachment_Rel>  {
	constructor() {
		super(Wikidoc_Attachment_RelSchema);
	}
};

Object.seal(Wikidoc_Attachment_RelRepository);
