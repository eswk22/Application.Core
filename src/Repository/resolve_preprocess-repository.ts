import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_PreprocessSchema} from './../Account/schema/resolve_preprocess-schema';
import {Resolve_Preprocess} from './../Account/resolve_preprocess';

export class Resolve_PreprocessRepository extends RepositoryBase<Resolve_Preprocess> implements IRepository<Resolve_Preprocess>  {
	constructor() {
		super(Resolve_PreprocessSchema);
	}
};

Object.seal(Resolve_PreprocessRepository);
