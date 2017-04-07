import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Catalog_AttachmentSchema} from './../Account/schema/catalog_attachment-schema';
import {Catalog_Attachment} from './../Account/catalog_attachment';

export class Catalog_AttachmentRepository extends RepositoryBase<Catalog_Attachment> implements IRepository<Catalog_Attachment>  {
	constructor() {
		super(Catalog_AttachmentSchema);
	}
};

Object.seal(Catalog_AttachmentRepository);
