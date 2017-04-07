import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Assess_RelSchema} from './../Account/schema/resolve_assess_rel-schema';
import {Resolve_Assess_Rel} from './../Account/resolve_assess_rel';

export class Resolve_Assess_RelRepository extends RepositoryBase<Resolve_Assess_Rel> implements IRepository<Resolve_Assess_Rel>  {
	constructor() {
		super(Resolve_Assess_RelSchema);
	}
};

Object.seal(Resolve_Assess_RelRepository);
