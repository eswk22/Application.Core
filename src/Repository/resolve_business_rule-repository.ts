import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Business_RuleSchema} from './../Account/schema/resolve_business_rule-schema';
import {Resolve_Business_Rule} from './../Account/resolve_business_rule';

export class Resolve_Business_RuleRepository extends RepositoryBase<Resolve_Business_Rule> implements IRepository<Resolve_Business_Rule>  {
	constructor() {
		super(Resolve_Business_RuleSchema);
	}
};

Object.seal(Resolve_Business_RuleRepository);
