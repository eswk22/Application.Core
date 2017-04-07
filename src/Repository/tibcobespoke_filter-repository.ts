import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Tibcobespoke_FilterSchema} from './../Account/schema/tibcobespoke_filter-schema';
import {Tibcobespoke_Filter} from './../Account/tibcobespoke_filter';

export class Tibcobespoke_FilterRepository extends RepositoryBase<Tibcobespoke_Filter> implements IRepository<Tibcobespoke_Filter>  {
	constructor() {
		super(Tibcobespoke_FilterSchema);
	}
};

Object.seal(Tibcobespoke_FilterRepository);
