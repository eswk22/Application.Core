import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Preprocess_RelSchema} from './../Account/schema/resolve_preprocess_rel-schema';
import {Resolve_Preprocess_Rel} from './../Account/resolve_preprocess_rel';

export class Resolve_Preprocess_RelRepository extends RepositoryBase<Resolve_Preprocess_Rel> implements IRepository<Resolve_Preprocess_Rel>  {
	constructor() {
		super(Resolve_Preprocess_RelSchema);
	}
};

Object.seal(Resolve_Preprocess_RelRepository);
