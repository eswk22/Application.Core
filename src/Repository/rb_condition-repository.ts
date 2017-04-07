import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Rb_ConditionSchema} from './../Account/schema/rb_condition-schema';
import {Rb_Condition} from './../Account/rb_condition';

export class Rb_ConditionRepository extends RepositoryBase<Rb_Condition> implements IRepository<Rb_Condition>  {
	constructor() {
		super(Rb_ConditionSchema);
	}
};

Object.seal(Rb_ConditionRepository);
