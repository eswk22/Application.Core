import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Caspectrum_FilterSchema} from './../Account/schema/caspectrum_filter-schema';
import {Caspectrum_Filter} from './../Account/caspectrum_filter';

export class Caspectrum_FilterRepository extends RepositoryBase<Caspectrum_Filter> implements IRepository<Caspectrum_Filter>  {
	constructor() {
		super(Caspectrum_FilterSchema);
	}
};

Object.seal(Caspectrum_FilterRepository);
