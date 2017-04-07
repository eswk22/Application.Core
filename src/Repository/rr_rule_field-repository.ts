import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Rr_Rule_FieldSchema} from './../Account/schema/rr_rule_field-schema';
import {Rr_Rule_Field} from './../Account/rr_rule_field';

export class Rr_Rule_FieldRepository extends RepositoryBase<Rr_Rule_Field> implements IRepository<Rr_Rule_Field>  {
	constructor() {
		super(Rr_Rule_FieldSchema);
	}
};

Object.seal(Rr_Rule_FieldRepository);
