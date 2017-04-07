import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_ParserSchema} from './../Account/schema/resolve_parser-schema';
import {Resolve_Parser} from './../Account/resolve_parser';

export class Resolve_ParserRepository extends RepositoryBase<Resolve_Parser> implements IRepository<Resolve_Parser>  {
	constructor() {
		super(Resolve_ParserSchema);
	}
};

Object.seal(Resolve_ParserRepository);
