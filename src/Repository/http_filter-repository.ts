import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Http_FilterSchema} from './../Account/schema/http_filter-schema';
import {Http_Filter} from './../Account/http_filter';

export class Http_FilterRepository extends RepositoryBase<Http_Filter> implements IRepository<Http_Filter>  {
	constructor() {
		super(Http_FilterSchema);
	}
};

Object.seal(Http_FilterRepository);
