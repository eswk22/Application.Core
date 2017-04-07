import {RepositoryBase,IRepository} from './Base/RepositoryBase';
import {Wikidoc_Rating_QualitySchema} from './../Account/schema/wikidoc_rating_quality-schema';
import {Wikidoc_Rating_Quality} from './../Account/wikidoc_rating_quality';

export class Wikidoc_Rating_QualityRepository extends RepositoryBase<Wikidoc_Rating_Quality> implements IRepository<Wikidoc_Rating_Quality>  {
	constructor() {
		super(Wikidoc_Rating_QualitySchema);
	}
};

Object.seal(Wikidoc_Rating_QualityRepository);
