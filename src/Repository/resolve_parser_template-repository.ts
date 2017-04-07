import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Resolve_Parser_TemplateSchema} from './../Account/schema/resolve_parser_template-schema';
import {Resolve_Parser_Template} from './../Account/resolve_parser_template';

export class Resolve_Parser_TemplateRepository extends RepositoryBase<Resolve_Parser_Template> implements IRepository<Resolve_Parser_Template>  {
	constructor() {
		super(Resolve_Parser_TemplateSchema);
	}
};

Object.seal(Resolve_Parser_TemplateRepository);
