import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Xmpp_FilterSchema} from './../Account/schema/xmpp_filter-schema';
import {Xmpp_Filter} from './../Account/xmpp_filter';

export class Xmpp_FilterRepository extends RepositoryBase<Xmpp_Filter> implements IRepository<Xmpp_Filter>  {
	constructor() {
		super(Xmpp_FilterSchema);
	}
};

Object.seal(Xmpp_FilterRepository);
