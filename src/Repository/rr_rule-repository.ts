import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Rr_RuleSchema} from './../Account/schema/rr_rule-schema';
import {Rr_Rule} from './../Account/rr_rule';

export class Rr_RuleRepository extends RepositoryBase<Rr_Rule> implements IRepository<Rr_Rule>  {
	constructor() {
		super(Rr_RuleSchema);
	}
};

Object.seal(Rr_RuleRepository);
