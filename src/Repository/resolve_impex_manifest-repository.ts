import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Impex_ManifestSchema} from './../Account/schema/resolve_impex_manifest-schema';
import {Resolve_Impex_Manifest} from './../Account/resolve_impex_manifest';

export class Resolve_Impex_ManifestRepository extends RepositoryBase<Resolve_Impex_Manifest> implements IRepository<Resolve_Impex_Manifest>  {
	constructor() {
		super(Resolve_Impex_ManifestSchema);
	}
};

Object.seal(Resolve_Impex_ManifestRepository);
