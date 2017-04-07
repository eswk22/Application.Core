import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_TagSchema} from './../Account/schema/resolve_tag-schema';
import {Resolve_Tag} from './../Account/resolve_tag';

export class Resolve_TagRepository extends RepositoryBase<Resolve_Tag> implements IRepository<Resolve_Tag>  {
	constructor() {
		super(Resolve_TagSchema);
	}
};

Object.seal(Resolve_TagRepository);
