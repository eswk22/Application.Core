import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_ArchiveSchema} from './../Account/schema/resolve_archive-schema';
import {Resolve_Archive} from './../Account/resolve_archive';

export class Resolve_ArchiveRepository extends RepositoryBase<Resolve_Archive> implements IRepository<Resolve_Archive>  {
	constructor() {
		super(Resolve_ArchiveSchema);
	}
};

Object.seal(Resolve_ArchiveRepository);
