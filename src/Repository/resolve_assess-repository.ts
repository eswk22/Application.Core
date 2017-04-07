import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_AssessSchema} from './../Account/schema/resolve_assess-schema';
import {Resolve_Assess} from './../Account/resolve_assess';

export class Resolve_AssessRepository extends RepositoryBase<Resolve_Assess> implements IRepository<Resolve_Assess>  {
	constructor() {
		super(Resolve_AssessSchema);
	}
};

Object.seal(Resolve_AssessRepository);
