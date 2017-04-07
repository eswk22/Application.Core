import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Parser_RelSchema} from './../Account/schema/resolve_parser_rel-schema';
import {Resolve_Parser_Rel} from './../Account/resolve_parser_rel';

export class Resolve_Parser_RelRepository extends RepositoryBase<Resolve_Parser_Rel> implements IRepository<Resolve_Parser_Rel>  {
	constructor() {
		super(Resolve_Parser_RelSchema);
	}
};

Object.seal(Resolve_Parser_RelRepository);
