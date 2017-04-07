import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Ericsson_EmslistSchema} from './../Account/schema/ericsson_emslist-schema';
import {Ericsson_Emslist} from './../Account/ericsson_emslist';

export class Ericsson_EmslistRepository extends RepositoryBase<Ericsson_Emslist> implements IRepository<Ericsson_Emslist>  {
	constructor() {
		super(Ericsson_EmslistSchema);
	}
};

Object.seal(Ericsson_EmslistRepository);
