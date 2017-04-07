import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Social_Post_AttachmentSchema} from './../Account/schema/social_post_attachment-schema';
import {Social_Post_Attachment} from './../Account/social_post_attachment';

export class Social_Post_AttachmentRepository extends RepositoryBase<Social_Post_Attachment> implements IRepository<Social_Post_Attachment>  {
	constructor() {
		super(Social_Post_AttachmentSchema);
	}
};

Object.seal(Social_Post_AttachmentRepository);
