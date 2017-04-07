import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Rb_CriterionSchema} from './../Account/schema/rb_criterion-schema';
import {Rb_Criterion} from './../Account/rb_criterion';

export class Rb_CriterionRepository extends RepositoryBase<Rb_Criterion> implements IRepository<Rb_Criterion>  {
	constructor() {
		super(Rb_CriterionSchema);
	}
};

Object.seal(Rb_CriterionRepository);
