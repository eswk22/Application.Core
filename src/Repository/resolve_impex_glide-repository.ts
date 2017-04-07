import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Impex_GlideSchema} from './../Account/schema/resolve_impex_glide-schema';
import {Resolve_Impex_Glide} from './../Account/resolve_impex_glide';

export class Resolve_Impex_GlideRepository extends RepositoryBase<Resolve_Impex_Glide> implements IRepository<Resolve_Impex_Glide>  {
	constructor() {
		super(Resolve_Impex_GlideSchema);
	}
};

Object.seal(Resolve_Impex_GlideRepository);
