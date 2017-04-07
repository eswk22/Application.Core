import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Wikidoc_StatisticsSchema} from './../Account/schema/wikidoc_statistics-schema';
import {Wikidoc_Statistics} from './../Account/wikidoc_statistics';

export class Wikidoc_StatisticsRepository extends RepositoryBase<Wikidoc_Statistics> implements IRepository<Wikidoc_Statistics>  {
	constructor() {
		super(Wikidoc_StatisticsSchema);
	}
};

Object.seal(Wikidoc_StatisticsRepository);
